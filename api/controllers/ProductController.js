const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
  let products = await Product.findAll()
  res.send(products)
}

exports.getProduct = async (req, res) => {
  let product = await Product.findByPk(req.params.id)
  res.send(product)
}

exports.createProduct = async (req, res) => {
  let product = { ...req.body }
  let created = await Product.create(product)
  res.send(created)
}

exports.updateProduct = async (req, res) => {
  let product = { ...req.body }
  await Product.update(product, { where: { id: req.params.id } })
  let updated = await Product.findByPk(req.params.id)
  res.send(updated)
}

exports.deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } })
  res.end()
}