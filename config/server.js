module.exports = ({ env }) => {
  console.log("APP_KEYS:", env("APP_KEYS")); // Add this line to check if it's loaded correctly
  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
