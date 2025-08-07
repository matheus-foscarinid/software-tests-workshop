import unittest
from math import add

class TestMath(unittest.TestCase):
  def test_add(self):
    # Preparar
    a = 2
    b = 3

    # Agir
    resultado = add(a, b)

    # Verificar
    self.assertEqual(resultado, 5)

if __name__ == '__main__':
  unittest.main()
