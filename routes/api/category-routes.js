const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({ include: Product
})
  .then((categoryData) => {
    res.status(200).json(categoryData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);

});
});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({ where: { id: req.params.id }, include: Product   
})
  .then((categoryData) => {
    res.status(200).json(categoryData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);

});
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({ category_name: req.body.category_name })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  
  });
  });

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
      where: { id: req.params.id },
  })
      .then((categoryData) => {
          res.status(200).json(categoryData);
      })
      .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal server error" });
      });
});



router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
    .then((categoryData) => {
      if (categoryData === 0) {
        res.status(404).json({ message: 'No category found!' });
        return;
      }
      res.status(200).json({ message: 'Category deleted' });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
