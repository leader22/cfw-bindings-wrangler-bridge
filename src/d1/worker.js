// @ts-check

/**
 * @param {any} binding
 * @returns {binding is D1Database}
 */
export const isD1Binding = (binding) => binding.constructor.name === "D1Database";

/**
 * @param {D1Database} D1
 * @param {Request} req
 */
export const handleD1Dispatch = async (D1, req) => {
  const { operation, parameters } = JSON.parse(
    req.headers.get("X-BRIDGE-D1-Dispatch") ?? "{}",
   
  );

  if (operation === "D1Database.dump") {
    const result = await D1.dump();

    return new Response(result);
  }

  throw new Error(`${operation}() is not supported.`);
};
