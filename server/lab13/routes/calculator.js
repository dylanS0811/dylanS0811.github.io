import express from 'express';

const router = express.Router();

function getOperands(req) {
  let a = Number(req.params.a || req.query.a || req.body.a);
  let b = Number(req.params.b || req.query.b || req.body.b);
  return { a, b };
}

function sendResult(res, value) {
  res.status(200).json({ results: value });
}

// === ADDITION ===
router.get('/addition/:a/:b', (req, res) =>
  sendResult(res, getOperands(req).a + getOperands(req).b)
);
router.get('/addition', (req, res) => sendResult(res, getOperands(req).a + getOperands(req).b));
router.post('/addition', (req, res) => sendResult(res, getOperands(req).a + getOperands(req).b));

// === SUBTRACTION ===
router.get('/subtraction/:a/:b', (req, res) =>
  sendResult(res, getOperands(req).a - getOperands(req).b)
);
router.get('/subtraction', (req, res) => sendResult(res, getOperands(req).a - getOperands(req).b));
router.post('/subtraction', (req, res) => sendResult(res, getOperands(req).a - getOperands(req).b));

// === MULTIPLICATION ===
router.get('/multiplication/:a/:b', (req, res) =>
  sendResult(res, getOperands(req).a * getOperands(req).b)
);
router.get('/multiplication', (req, res) =>
  sendResult(res, getOperands(req).a * getOperands(req).b)
);
router.post('/multiplication', (req, res) =>
  sendResult(res, getOperands(req).a * getOperands(req).b)
);

// === DIVISION ===
router.get('/division/:a/:b', (req, res) => {
  const { a, b } = getOperands(req);
  sendResult(res, b !== 0 ? a / b : 'Error: divide by zero');
});
router.get('/division', (req, res) => {
  const { a, b } = getOperands(req);
  sendResult(res, b !== 0 ? a / b : 'Error: divide by zero');
});
router.post('/division', (req, res) => {
  const { a, b } = getOperands(req);
  sendResult(res, b !== 0 ? a / b : 'Error: divide by zero');
});

// === MODULUS ===
router.get('/modulus/:a/:b', (req, res) => {
  const { a, b } = getOperands(req);
  sendResult(res, b !== 0 ? a % b : 'Error: divide by zero');
});
router.get('/modulus', (req, res) => {
  const { a, b } = getOperands(req);
  sendResult(res, b !== 0 ? a % b : 'Error: divide by zero');
});
router.post('/modulus', (req, res) => {
  const { a, b } = getOperands(req);
  sendResult(res, b !== 0 ? a % b : 'Error: divide by zero');
});

export default router;
