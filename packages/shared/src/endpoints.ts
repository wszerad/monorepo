import { Type } from '@sinclair/typebox'

function get<S = any>(url: string, schema: S) {
	return {
		url,
		method: 'GET' as any,
		schema
	}
}

function post<S = any>(url: string, schema: S) {
	return {
		url,
		method: 'POST' as any,
		schema
	}
}

export const endpoints = {
	ping: get('/ping', {
		response: {
			200: Type.String(),
			400: Type.String()
		}
	})
}
