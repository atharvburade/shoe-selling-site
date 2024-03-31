import { Router } from 'express';
import { sample_shoes, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { shoeModel } from '../models/shoe.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const shoesCount = await shoeModel.countDocuments();
    if (shoesCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await shoeModel.create(sample_shoes);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const shoes = await shoeModel.find();
    res.send(shoes);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const shoes = await shoeModel.find({ name: { $regex: searchRegex } });
    res.send(shoes);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await shoeModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await shoeModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const shoes = await shoeModel.find({ tags: req.params.tagName });
    res.send(shoes);
  })
);

router.get(
  '/:shoeId',
  asyncHandler(async (req, res) => {
    const shoe = await shoeModel.findById(req.params.shoeId);
    res.send(shoe);
  })
);

export default router;
