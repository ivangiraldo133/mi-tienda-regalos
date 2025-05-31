CREATE TABLE PEDIDOS_INICIALES (
  ID SERIAL PRIMARY KEY,
  Usuario TEXT NOT NULL,
  Direccion TEXT NOT NULL,
  Telefono TEXT NOT NULL,
  DescripcionPedido TEXT NOT NULL,
  EstadoCuenta TEXT,
  EstadoPedido TEXT,
  Observacion TEXT,
  Comprobante TEXT
);
