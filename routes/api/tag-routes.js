const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: Product
  })
  .then((tagData) => {
    res.status(200).json(tagData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
    .then((tagData) => {
      if (!tagData) {
        res.status(404).json();
        return;
      }
      res.status(200).json(tagData);
    });
});




router.post('/', (req, res) => {
  // create a new tag
  Tag.create({ tag_name: req.body.tag_name })
  .then((productData) => {
    res.status(200).json(productData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
});
});


router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
      where: {
          id: req.params.id,
      },
  }).then((tag) => {
      if (!tag) {
          res.status(404).json({ message: "No tag found" });
          return;
      }
      res.status(200).json(tag);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where: {id: req.params.id} })
  .then((tag) => {
    if (!tag) {
      res.status(404).json({ message: 'No tag found' });
      return;
    }
    res.status(200).json(tag);
  });

});

module.exports = router;
