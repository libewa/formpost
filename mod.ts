const res = new Response("Resource created", {status: 201});
const mno = new Response("This route currently only accepts POST requests", {
    status: 405,
    headers: {
        "Allow": "POST"
    }
});

Deno.serve({ port: 80, hostname: "0.0.0.0" }, (_req) => {
    if (_req.method == "POST") {
        console.log(_req.formData())
        return res;
    } else return mno;
});