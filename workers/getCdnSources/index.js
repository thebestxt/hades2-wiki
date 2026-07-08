// index.js

export default {
  async fetch(request, env, ctx) {
    // 1. 全局跨域处理
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // 2. 直接读取你绑定好的 R2 存储桶里的 sources.json 文件
      const jsonObject = await env["hadesii-sources"].get("sources.json");

      if (jsonObject === null) {
        return new Response(JSON.stringify({ error: "未在存储桶根目录下找到 sources.json 文件" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      const sourcesText = await jsonObject.text();
      const sourcesMap = JSON.parse(sourcesText); 

      // 3. 🌟 获取你在 wrangler.toml 里配的 CDN_DOMAIN 真正的公网自定义域名
      // 如果你没配，为了防止报错，这里会自动降级使用公网临时的 r2.dev 域名（记得去R2后台Settings开启R2.dev Subdomain）
      const baseCdnUrl = env.CDN_DOMAIN || `https://pub-你的公共子域名.r2.dev`; 

      // 4. 循环映射表，直接把真正的公网域名拼在资源路径前面
      const finalResult = {};
      for (const [key, relativePath] of Object.entries(sourcesMap)) {
        const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
        
        // 🌟 核心：这里直接拼成你在 R2 绑定的那个能直接访问的公网绝对链接
        finalResult[key] = `${baseCdnUrl}/${cleanPath}`;
      }

      // 5. 返回组装好的、带全量公网链接的 JSON 结果给前端
      return new Response(JSON.stringify({ success: true, data: finalResult }), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate" // 既然是动态获取最新公网链接，不让边缘节点缓存
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};