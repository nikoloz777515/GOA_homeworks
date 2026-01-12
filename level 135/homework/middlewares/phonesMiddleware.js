const phoneBodyChecker = (req, res, next) => {
  const { brand, model, price } = req.body

  if (!brand || !model || !price) {
    return res.status(400).json({
      message: 'brand, model და price აუცილებელია'
    })
  }

  next() // გადავდივართ შემდეგ middleware-ზე ან controller-ზე
}

module.exports = phoneBodyChecker
