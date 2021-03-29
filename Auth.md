# Authorization and Authentication in modern Javascript applications

In this module we are going to get the main concepts when securing our fullstack
Javascript apps.

Authorization and authentication are two different things, but both related to IAM concept of
Identity and Access Management. Authentication is knowing who es making the request, and authorization 
is about the access level, or what actions (permissions and privileges) the user is allow to perform.


Authentication can be performed by 3 means:

- Something you know (passwords and passphrase)
- Something you have (like tokens or private keys)
- Something you are (like fingerprints- biometrics)

Authorization can be implemented with:

- Permissions and privileges
- Roles
- Access Policies
  

# OAuth 

Is a unified approach to grant access to some app to your resources

- Resource owner (the user or account connected)
- Resource Server (owr backend)
- Client app (frontend app)
- Authorization Server (Google's firebase auth service)

# SSO OpenID Connect ?

One password can manage authentication in different apps 

# Tokens and JWT

- ID tokens
- Access Tokens (passed behind the scene)
- Refresh tokens  (client apps request a new when the access token gets expired)
  
# Json Web Token

They all have three parts
- Header (Algorithm and type)
- Payload (data)
- Signature (hash of the header and the data to avoid tampering)
  


