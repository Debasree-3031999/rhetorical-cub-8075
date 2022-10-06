import { Address } from "../Models/addressModel.js";

export const getAddress = async (req, res) => {
  try {
    const add = await Address.findOne({userId:req.params.id})
    res.status(200).send(add);
  } catch (e) {
    res.status(400).send({ error: true, message: "no address found" });
  }
};

export const postAddress = async (req, res) => {
  const address = new Address({
    ...req.body,
  });
  try {
    await address.save();
    res.status(200).send(address);
  } catch (err) {
    console.log(err);
  }
};
