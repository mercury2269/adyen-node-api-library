/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilityProblemEntityRecursive } from './capabilityProblemEntityRecursive';

export class CapabilityProblemEntity {
    /**
    * List of document IDs to which the verification errors related to the capabilities correspond to.
    */
    'documents'?: Array<string>;
    /**
    * The ID of the entity.
    */
    'id'?: string;
    'owner'?: CapabilityProblemEntityRecursive | null;
    /**
    * The type of entity.  Possible values: **LegalEntity**, **BankAccount**, or **Document**.
    */
    'type'?: CapabilityProblemEntity.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<string>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "CapabilityProblemEntityRecursive | null"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CapabilityProblemEntity.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CapabilityProblemEntity.attributeTypeMap;
    }
}

export namespace CapabilityProblemEntity {
    export enum TypeEnum {
        BankAccount = 'BankAccount',
        Document = 'Document',
        LegalEntity = 'LegalEntity'
    }
}
