import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export class FacebookGraphApi implements ICredentialType {
	name = 'facebookGraphApi';
	displayName = 'Facebook Graph API';
	documentationUrl = 'facebookGraph';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				access_token: '={{$credentials.accessToken}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://graph.facebook.com/v8.0',
			url: '/me',
		},
	};
}
