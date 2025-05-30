/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { StoreLocation } from './storeLocation';
import { StoreSplitConfiguration } from './storeSplitConfiguration';

export class StoreCreationRequest {
    'address': StoreLocation;
    /**
    * The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/legalentity/latest/post/businessLines#responses-200-id) that the store is associated with. If not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account.
    */
    'businessLineIds'?: Array<string>;
    /**
    * Your description of the store.
    */
    'description': string;
    /**
    * The unique identifier of the store, used by certain payment methods and tax authorities.  Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.  Optional for SIRET in France, up to 14 digits.  Optional for Zip in Australia, up to 50 digits.  
    */
    'externalReferenceId'?: string;
    /**
    * The phone number of the store, including \'+\' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. 
    */
    'phoneNumber': string;
    /**
    * Your reference to recognize the store by. Also known as the store code.  Allowed characters: lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_).  If you do not provide a reference in your POST request, it is populated with the Adyen-generated [id](https://docs.adyen.com/api-explorer/Management/latest/post/stores#responses-200-id).
    */
    'reference'?: string;
    /**
    * The store name to be shown on the shopper\'s bank or credit card statement and on the shopper receipt. Maximum length: 22 characters; can\'t be all numbers.
    */
    'shopperStatement': string;
    'splitConfiguration'?: StoreSplitConfiguration | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "StoreLocation"
        },
        {
            "name": "businessLineIds",
            "baseName": "businessLineIds",
            "type": "Array<string>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "externalReferenceId",
            "baseName": "externalReferenceId",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "splitConfiguration",
            "baseName": "splitConfiguration",
            "type": "StoreSplitConfiguration | null"
        }    ];

    static getAttributeTypeMap() {
        return StoreCreationRequest.attributeTypeMap;
    }
}

