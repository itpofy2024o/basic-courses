-- CreateTable
CREATE TABLE "fastingdailyreport" (
    "id" SERIAL NOT NULL,
    "mealtype" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" VARCHAR(255) NOT NULL,
    "ingredient" VARCHAR(255) NOT NULL,
    "calorie" DECIMAL(65,30) NOT NULL,
    "sugargram" DECIMAL(65,30) NOT NULL,
    "satfat" DECIMAL(65,30) NOT NULL,
    "unfat" DECIMAL(65,30) NOT NULL,
    "protein" DECIMAL(65,30) NOT NULL,
    "carb" DECIMAL(65,30) NOT NULL,
    "sodium" DECIMAL(65,30) NOT NULL,
    "diettype" VARCHAR(255) NOT NULL,

    CONSTRAINT "fastingdailyreport_pkey" PRIMARY KEY ("id")
);
