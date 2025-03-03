/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { CommonAuthorizationCodeRequest } from "@azure/msal-common";

export type AuthorizationCodeRequest = Partial<Omit<CommonAuthorizationCodeRequest, "code"|"enableSpaAuthorizationCode">> & {
    code: string;
    cloudGraphHostName?: string;
    msGraphHost?: string;
    cloudInstanceHostName?: string;
};
