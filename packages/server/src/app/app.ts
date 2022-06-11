import fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { endpoints } from 'shared/endpoints'

const server = fastify({
	ajv: {
		customOptions: {
			strict: 'log',
			keywords: ['kind', 'modifier'],
		},
	},
})
	.withTypeProvider<TypeBoxTypeProvider>()

server
	.route({
		...endpoints.ping,
		handler() {
			return 'pong'
		}
	})

server.listen({
	port: 3000
})

