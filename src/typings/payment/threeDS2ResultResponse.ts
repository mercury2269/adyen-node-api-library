/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ThreeDS2Result } from './threeDS2Result';

export class ThreeDS2ResultResponse {
    'threeDS2Result'?: ThreeDS2Result | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "threeDS2Result",
            "baseName": "threeDS2Result",
            "type": "ThreeDS2Result | null"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2ResultResponse.attributeTypeMap;
    }
}

