package math

import "testing"

func TestAdd(t *testing.T) {
	// Preparar
	a := 2
	b := 3

	// Agir
	resultado := Add(a, b)

	// Verificar
	if resultado != 5 {
		t.Errorf("esperado 5, obteve %d", resultado)
	}
}
