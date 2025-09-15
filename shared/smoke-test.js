require('dotenv').config();
const { db } = require('./firebase-admin');

(async () => {
  const ref = db.collection('branches').doc('_smoke');
  await ref.set({ code: '_smoke', name: 'Smoke Test', ts: new Date() });
  const snap = await ref.get();
  console.log('Write+read OK:', snap.exists, snap.data());
})();
