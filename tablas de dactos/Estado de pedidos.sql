CREATE TABLE estado_pedidos (
  usuario_id TEXT PRIMARY KEY,
  direccion TEXT NOT NULL,
  telefono VARCHAR(15),
  descripcion_pedido TEXT,
  estado_cuenta TEXT,
  estado_pedido TEXT,
  observacion TEXT,
  adjuntar_comprobante TEXT
);

SELECT * 
FROM estado_pedidos
WHERE usuario_id IN ('2', '3', '4', '5', '6', '8', '9', '10');


-- Inserción de pedido de prueba
INSERT INTO estado_pedidos (
  usuario_id,
  direccion,
  telefono,
  descripcion_pedido,
  estado_cuenta,
  estado_pedido,
  observacion,
  adjuntar_comprobante
) VALUES (
  'USR001',
  'Calle 123',
  '3200000000',
  'Pedido de ancheta',
  'Debe',
  'En proceso',
  'Sin observaciones',
  'comprobante.png'
);





