// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"scope\":\"user_impersonation\",\"expires_on\":\"1448982912\",\"not_before\":\"1448979012\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ4OTc5MDEyLCJuYmYiOjE0NDg5NzkwMTIsImV4cCI6MTQ0ODk4MjkxMiwiYWNyIjoiMSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkJhbmRhcnUiLCJnaXZlbl9uYW1lIjoiU3JlZWthbnRoIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsImEzNDY5ZDVkLTg1M2EtNDkyYi05NjVmLWZlZDdhYzI4NTk1YSIsIjZjZWQyZmQ1LTkzMTAtNDdmNy1iNjBjLTUyN2NlOWI3NzFlZSIsIjJkMmU2NTU3LTc2Y2ItNDdiMy1hODk3LTA2YzJlNTRlM2M0YiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImRjMDMxYWVhLWUzZDctNDU1OS1hZDljLTAzN2VhYTRjYmI2OCIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsIjkzMjlkMzhjLTUyOTYtNGVjYi1hZmE1LTNlNzRmOWFiZTA5ZiIsIjk3ZGE2MjlkLTU3ZDktNDIzNi04OWFmLWJmOTE4NDFkZmQ5MiIsIjYyZWRiZDdiLThkNDYtNGQyYy1hNWExLWRhNWI3OGJhMWQzOCIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImExOTBiMzdlLTMyMjgtNGRiZS05NzFkLWM0YWQ1ZTI3NGNhYSIsImQ3ZDM5ZmU1LWU3ZWItNDc5Ny1iZDRiLWU4MDJlOGZhMjZjYyIsIjlkNTI5ZDVlLWI4ODItNGZmYi1hOGU2LWM0MTQ3YzY4MDczNSIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjdhZDEyYmZiLTczMWEtNDBmYS1hMGYzLWE1MTFjMzRjODVjZSIsIjNiYzhhYTdkLTQ5YzgtNGQ3ZC05ZjlmLTkzNzBkZmJmN2I3OCIsIjYxZDliYzZiLWJjOWQtNGU4ZC05ZGU0LWYyMThkNDEyOGJlNSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsImM4MzVkNWQwLWYwNDMtNGNjMC04Y2NlLTYwMWE2MTk2OGYxZiIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiIsImRjYzMxYjM5LWU3ZmUtNDAwYy1hZjg0LTMxZGQ4NTVkZWZhMSJdLCJpcGFkZHIiOiI1OS4xNjUuMjE1LjI1MyIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwib2lkIjoiYzA3MjA3YTUtNWUzNi00NzcxLTgwMmUtMGZiYzMzOTNiYjhlIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIxNDY3NzMwODUtOTAzMzYzMjg1LTcxOTM0NDcwNy0xOTEwNzAyIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidW5pcXVlX25hbWUiOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1zcmViYW5AbWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.dw_7Hcm36gJePQ9dfg-IXtwL37L0wcJEpG-xGCifXupWkpgTLVXQZSRTQL_uoe80CC0Vd7QGlYvlU1RMwbb0gWpND6H2RaP8VvUU7lKX5EO4KMOWeKpNnhugzkomCrrUsB0ly16HiwCdo_7XSvNwfxcdf_Rp56wJOr4NLs1NB9FAsogKwkhMIcf5ikZR2PiorVWpoYfF3XGSUmwuW5-0w381WVL6zDAQ1P4YaErXGif4kwEgc_AoOaipBSpJqXf5HIKrndsNQh17ZzLYwGbMgo5lA0fM7RqT8Zznmn1_DOzAlB6Sua1Q1j7q3_Qa6Kp906o_iK6T4a9pm0b1k8Ft2Q\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLXLWGajp5naDpJygzu2DrdncOXxbFY4K9P6TQsgAOMFb0S_sOYX74s05U02XWA6RV_mqx1322dM5GOMe5aMy4_ZDeavGchH_umAzKY94Fcj-dng-i96381LEtwovDtMs-FuJGv99drUA287_ndfVBcs1y2Ql__oNzIy669l0-yM9Dy4CM9HPZHopWsJ0RJBulLK6ls-GH27WjOozNLlD6s1O-z66-TET9bYmdLb5RRnG__OgwvB251OR-L6nd6WMeDx6TygO1FtVNgXj2eFbxgvLpqFNyRt9g9lnNECw8-OZTxVSeZmBg54Grr7nVJzueR144cyKKuoIzzihESQ0Yrmq0-OUjjpaHzgVw-gVcF7ciQNv5pzm3h3f022RG9MbFrytajbGfHD8iNor-1ZBwW9_xLaQCRRjIF1zE7tT-W1Lf3Y2oCxnEwRtu9ExUiKolga_FwLAjeBT_nrZK5g38Y2zx8UcavpRmWjTUC8xdG2Xkk7BJL55HHEnKCJwEqwLAuWjCnmiCdMExkLlu6mNmJirMzH8XKBD2aovvNFVT_D0bIAIenHJMTULiVB5NoGSi5jyEGGJG5yFKzY-ISh4DkKHHnAK9puSEEAIleFVhTi5EKgNL0TjMIoiPZR5gCsvZFDLetRszv4R1pTkpdAeoqWOXK37YZPPR62o7JEYP7w4oFklKpTZRgL-jVqwQ7YwOCAA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '78b3d9d0-5032-4676-941a-5a80dbd7ab23',
  'client-request-id': 'ccc8b20f-4926-497b-bed0-33f433e6400e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_23',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 01 Dec 2015 14:15:09 GMT',
  connection: 'close',
  'content-length': '3691' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"scope\":\"user_impersonation\",\"expires_on\":\"1448982912\",\"not_before\":\"1448979012\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDQ4OTc5MDEyLCJuYmYiOjE0NDg5NzkwMTIsImV4cCI6MTQ0ODk4MjkxMiwiYWNyIjoiMSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkJhbmRhcnUiLCJnaXZlbl9uYW1lIjoiU3JlZWthbnRoIiwiZ3JvdXBzIjpbIjdjOGFjYjRjLWRhM2UtNDc4ZS1hYTkyLWVjMmZkMzU4ZjkyZCIsImNjOWY4YTZjLWU5YzEtNGUzNC05ZWEwLTJjMTUxZGZhNjNmYiIsImEzNDY5ZDVkLTg1M2EtNDkyYi05NjVmLWZlZDdhYzI4NTk1YSIsIjZjZWQyZmQ1LTkzMTAtNDdmNy1iNjBjLTUyN2NlOWI3NzFlZSIsIjJkMmU2NTU3LTc2Y2ItNDdiMy1hODk3LTA2YzJlNTRlM2M0YiIsIjdkYjNlOTYzLTAyNGItNGU0NS1hZWQ3LTU0YzAzMDBmMWNhNiIsImRjMDMxYWVhLWUzZDctNDU1OS1hZDljLTAzN2VhYTRjYmI2OCIsImE3MTAyNjhkLTUxYTktNDQ0Ny1iZjIwLTVjNDI4ZmQ3MDQ3YyIsIjkzMjlkMzhjLTUyOTYtNGVjYi1hZmE1LTNlNzRmOWFiZTA5ZiIsIjk3ZGE2MjlkLTU3ZDktNDIzNi04OWFmLWJmOTE4NDFkZmQ5MiIsIjYyZWRiZDdiLThkNDYtNGQyYy1hNWExLWRhNWI3OGJhMWQzOCIsIjNjNGZjZTQ2LTUzYzktNDlmNy05YmNjLWU5OTdkYzU2OGMwOSIsImY0NDQ0ZGFlLTRiY2UtNDAyZi1iNTRiLWYxMjQ2MWEzNmJiYyIsImExOTBiMzdlLTMyMjgtNGRiZS05NzFkLWM0YWQ1ZTI3NGNhYSIsImQ3ZDM5ZmU1LWU3ZWItNDc5Ny1iZDRiLWU4MDJlOGZhMjZjYyIsIjlkNTI5ZDVlLWI4ODItNGZmYi1hOGU2LWM0MTQ3YzY4MDczNSIsImU3NmFiMzFlLWRkNTgtNDBlMi1hN2MxLTNlYmIwMjkyMTIxMSIsIjJjYzE4NzVlLWUzZmItNDFlYS04MzcyLWI1NjkwZThjOTQyMSIsIjdhZDEyYmZiLTczMWEtNDBmYS1hMGYzLWE1MTFjMzRjODVjZSIsIjNiYzhhYTdkLTQ5YzgtNGQ3ZC05ZjlmLTkzNzBkZmJmN2I3OCIsIjYxZDliYzZiLWJjOWQtNGU4ZC05ZGU0LWYyMThkNDEyOGJlNSIsIjIwNjUxMzVkLTUxNjUtNDFkNi05Mjc3LThlMTQ5ZmMzM2VmOCIsImM4MzVkNWQwLWYwNDMtNGNjMC04Y2NlLTYwMWE2MTk2OGYxZiIsIjBkODY0Njc2LTdmNTUtNDY5NC05MGYyLTViNzVlYjc3YjM0MiIsImRjYzMxYjM5LWU3ZmUtNDAwYy1hZjg0LTMxZGQ4NTVkZWZhMSJdLCJpcGFkZHIiOiI1OS4xNjUuMjE1LjI1MyIsIm5hbWUiOiJTcmVla2FudGggQmFuZGFydSAoQlJJTExJTyBMTEMpIiwib2lkIjoiYzA3MjA3YTUtNWUzNi00NzcxLTgwMmUtMGZiYzMzOTNiYjhlIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIxNDY3NzMwODUtOTAzMzYzMjg1LTcxOTM0NDcwNy0xOTEwNzAyIiwicHVpZCI6IjEwMDMzRkZGOEQ3NUM3OTQiLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJQYjNudG03RjlHckZKZUNJVDNPRVdPZzBnTElJX1ZWTi0yNTBFOFlqeFdVIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidW5pcXVlX25hbWUiOiJ2LXNyZWJhbkBtaWNyb3NvZnQuY29tIiwidXBuIjoidi1zcmViYW5AbWljcm9zb2Z0LmNvbSIsInZlciI6IjEuMCJ9.dw_7Hcm36gJePQ9dfg-IXtwL37L0wcJEpG-xGCifXupWkpgTLVXQZSRTQL_uoe80CC0Vd7QGlYvlU1RMwbb0gWpND6H2RaP8VvUU7lKX5EO4KMOWeKpNnhugzkomCrrUsB0ly16HiwCdo_7XSvNwfxcdf_Rp56wJOr4NLs1NB9FAsogKwkhMIcf5ikZR2PiorVWpoYfF3XGSUmwuW5-0w381WVL6zDAQ1P4YaErXGif4kwEgc_AoOaipBSpJqXf5HIKrndsNQh17ZzLYwGbMgo5lA0fM7RqT8Zznmn1_DOzAlB6Sua1Q1j7q3_Qa6Kp906o_iK6T4a9pm0b1k8Ft2Q\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLXLWGajp5naDpJygzu2DrdncOXxbFY4K9P6TQsgAOMFb0S_sOYX74s05U02XWA6RV_mqx1322dM5GOMe5aMy4_ZDeavGchH_umAzKY94Fcj-dng-i96381LEtwovDtMs-FuJGv99drUA287_ndfVBcs1y2Ql__oNzIy669l0-yM9Dy4CM9HPZHopWsJ0RJBulLK6ls-GH27WjOozNLlD6s1O-z66-TET9bYmdLb5RRnG__OgwvB251OR-L6nd6WMeDx6TygO1FtVNgXj2eFbxgvLpqFNyRt9g9lnNECw8-OZTxVSeZmBg54Grr7nVJzueR144cyKKuoIzzihESQ0Yrmq0-OUjjpaHzgVw-gVcF7ciQNv5pzm3h3f022RG9MbFrytajbGfHD8iNor-1ZBwW9_xLaQCRRjIF1zE7tT-W1Lf3Y2oCxnEwRtu9ExUiKolga_FwLAjeBT_nrZK5g38Y2zx8UcavpRmWjTUC8xdG2Xkk7BJL55HHEnKCJwEqwLAuWjCnmiCdMExkLlu6mNmJirMzH8XKBD2aovvNFVT_D0bIAIenHJMTULiVB5NoGSi5jyEGGJG5yFKzY-ISh4DkKHHnAK9puSEEAIleFVhTi5EKgNL0TjMIoiPZR5gCsvZFDLetRszv4R1pTkpdAeoqWOXK37YZPPR62o7JEYP7w4oFklKpTZRgL-jVqwQ7YwOCAA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '78b3d9d0-5032-4676-941a-5a80dbd7ab23',
  'client-request-id': 'ccc8b20f-4926-497b-bed0-33f433e6400e',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_23',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productionb; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Tue, 01 Dec 2015 14:15:09 GMT',
  connection: 'close',
  'content-length': '3691' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'a8f95027-62ae-43b2-9151-ae30a47fe756',
  'x-ms-correlation-request-id': 'a8f95027-62ae-43b2-9151-ae30a47fe756',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141511Z:a8f95027-62ae-43b2-9151-ae30a47fe756',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:11 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGTMPEndpt' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-request-id': 'a8f95027-62ae-43b2-9151-ae30a47fe756',
  'x-ms-correlation-request-id': 'a8f95027-62ae-43b2-9151-ae30a47fe756',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141511Z:a8f95027-62ae-43b2-9151-ae30a47fe756',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:11 GMT',
  connection: 'close',
  'content-length': '110' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '0ad60dda-7f6d-4414-9fd0-bfd45a0e134b',
  'x-ms-correlation-request-id': '0ad60dda-7f6d-4414-9fd0-bfd45a0e134b',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141515Z:0ad60dda-7f6d-4414-9fd0-bfd45a0e134b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourcegroups/xplatTestGTMPEndpt?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt\",\"name\":\"xplatTestGTMPEndpt\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '0ad60dda-7f6d-4414-9fd0-bfd45a0e134b',
  'x-ms-correlation-request-id': '0ad60dda-7f6d-4414-9fd0-bfd45a0e134b',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141515Z:0ad60dda-7f6d-4414-9fd0-bfd45a0e134b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE' under resource group 'xplatTestGTMPEndpt' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e393ccd0-b428-43bc-984f-b496cb3d5672',
  'x-ms-correlation-request-id': 'e393ccd0-b428-43bc-984f-b496cb3d5672',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141517Z:e393ccd0-b428-43bc-984f-b496cb3d5672',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:16 GMT',
  connection: 'close',
  'content-length': '176' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE' under resource group 'xplatTestGTMPEndpt' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'e393ccd0-b428-43bc-984f-b496cb3d5672',
  'x-ms-correlation-request-id': 'e393ccd0-b428-43bc-984f-b496cb3d5672',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141517Z:e393ccd0-b428-43bc-984f-b496cb3d5672',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:16 GMT',
  connection: 'close',
  'content-length': '176' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns5987\",\"fqdn\":\"xplattmpendptdns5987.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '564',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '9e1e055a-061f-49c4-8f09-6ef2d41cfbf8',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '2333a542-41fd-4b5d-98cb-04b7ec1685fe',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141524Z:2333a542-41fd-4b5d-98cb-04b7ec1685fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\",\"name\":\"xplatTestTMPE\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"xplattmpendptdns5987\",\"fqdn\":\"xplattmpendptdns5987.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/index.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '564',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '9e1e055a-061f-49c4-8f09-6ef2d41cfbf8',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '2333a542-41fd-4b5d-98cb-04b7ec1685fe',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141524Z:2333a542-41fd-4b5d-98cb-04b7ec1685fe',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'xplattesttmpendpoint' of type 'externalendpoints' does not exist in the profile 'xplatTestTMPE'.\"}", { 'cache-control': 'private',
  'content-length': '142',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '5dca0d52-21fc-4e4e-8803-66a56fad041b',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '47d637e6-b096-4c3d-bd16-9c958890e66f',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141527Z:47d637e6-b096-4c3d-bd16-9c958890e66f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'xplattesttmpendpoint' of type 'externalendpoints' does not exist in the profile 'xplatTestTMPE'.\"}", { 'cache-control': 'private',
  'content-length': '142',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '5dca0d52-21fc-4e4e-8803-66a56fad041b',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '47d637e6-b096-4c3d-bd16-9c958890e66f',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141527Z:47d637e6-b096-4c3d-bd16-9c958890e66f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"xplattmpendptdns5987.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'efa61798-27af-4ed5-bc61-16330beeca63',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a665cf46-bc18-48d4-8dad-f3f85e7fe5ce',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141530Z:a665cf46-bc18-48d4-8dad-f3f85e7fe5ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGTMPEndpt/providers/Microsoft.Network/trafficmanagerprofiles/xplatTestTMPE/ExternalEndpoints/xplatTestTMPEndPoint?api-version=2015-04-28-preview', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgtmpendpt\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/xplatTestTMPE\\/externalEndpoints\\/xplatTestTMPEndPoint\",\"name\":\"xplatTestTMPEndPoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Enabled\",\"endpointMonitorStatus\":\"CheckingEndpoint\",\"target\":\"xplattmpendptdns5987.azure.com\",\"weight\":100,\"priority\":322,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '492',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'efa61798-27af-4ed5-bc61-16330beeca63',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a665cf46-bc18-48d4-8dad-f3f85e7fe5ce',
  'x-ms-routing-request-id': 'WESTINDIA:20151201T141530Z:a665cf46-bc18-48d4-8dad-f3f85e7fe5ce',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Dec 2015 14:15:30 GMT',
  connection: 'close' });
 return result; }]];