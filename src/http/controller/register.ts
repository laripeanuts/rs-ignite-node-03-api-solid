import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const register = async (
	request: FastifyRequest,
	reply: FastifyReply
) => {
	const registerBodySchema = z.object({
		email: z.string().email(),
		password: z.string().min(8).max(100),
		name: z.string().min(4),
	});

	const { email, password, name } = registerBodySchema.parse(request.body);

	await prisma.user.create({
		data: {
			email,
			password_hash: password,
			name,
		},
	});

	return reply.status(201).send("User created!");
};
