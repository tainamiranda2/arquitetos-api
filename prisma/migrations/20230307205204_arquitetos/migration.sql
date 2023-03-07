-- CreateTable
CREATE TABLE "arquiteto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "senha" INTEGER NOT NULL,
    "papel" TEXT NOT NULL,

    CONSTRAINT "arquiteto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "prazoI" TEXT NOT NULL,
    "prazoF" TEXT NOT NULL,
    "arquiteto_id" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "senha" INTEGER NOT NULL,
    "papel" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
