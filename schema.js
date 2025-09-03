const joi = require("joi");

module.exports.listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      description: joi.string().required(),
      location: joi.string().required(),
      country: joi.string().required(),
      price: joi.number().required().min(0),

      // ✅ Match Mongoose structure: image is an object
      image: joi
        .object({
          filename: joi.string().allow("", null),
          url: joi.string().uri().allow("", null),
        })
        .allow(null), // allow no image (editing without changing)

      // ✅ For cases where we keep the old image
      existingImageUrl: joi.string().uri().allow("", null),
    })
    .required(),
});

module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().min(1).max(5),
      comment: joi.string().required(),
    })
    .required(),
});
