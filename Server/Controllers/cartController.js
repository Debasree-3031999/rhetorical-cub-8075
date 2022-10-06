import { Cartmodel } from "../Models/cartModel.js";
import { Product } from "../Models/productModel.js";

export const getCartData = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "unauthorised" });
  }
  try {
    const data = await Cartmodel.find({ userId: id });
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send({ message: "error occurred" });
  }
};

export const postToCart = async (req, res) => {
  const data = req.body;
  if (!data) {
    res.status(400).send({ message: "no valid data" });
  }
  const responce = new Cartmodel({ ...req.body });
  try {
    await responce.save();
    res.status(200).send("Added to cart");
  } catch (e) {
    res.status(400).send({ message: e });
  }
};

export const incrementQty = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unautorize" });
  }
  try {
    const responce = await Cartmodel.findByIdAndUpdate(
      id,
      { $inc: { quantity: 1 } },
      { new: true }
    );
    res.status(200).send(responce);
  } catch (e) {
    res.status(404).send({ message: "azdcsafdsafsadfdsfgdsfgdsfsf" });
  }
};

export const decrementQty = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unauthorize" });
  }
  try {
    const responce = await Cartmodel.findByIdAndUpdate(
      id,
      { $inc: { quantity: -1 } },
      { new: true }
    );
    res.status(200).send(responce);
  } catch (e) {
    res.status(404).send({ message: e });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: "unauthorize" });
  }
  try {
    const responce = await Cartmodel.deleteOne({ id: id });
    res.status(200).send(responce);
  } catch (e) {
    res.status(403).send({ message: e });
  }
};
