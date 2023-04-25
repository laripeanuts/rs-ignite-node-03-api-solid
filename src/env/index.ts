import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(3333),
	NODE_ENV: z
		.enum(["development", "test", "production"])
		.default("development"),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	const typeError = "Invalid environment variables";
	console.error(typeError, _env.error.format());
	throw new Error(typeError);
}

export const env = _env.data;
