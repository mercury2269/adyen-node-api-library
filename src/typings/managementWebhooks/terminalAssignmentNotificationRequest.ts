/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TerminalAssignmentNotificationRequest {
    /**
    * The unique identifier of the merchant/company account to which the terminal is assigned.
    */
    'assignedToAccount': string;
    /**
    * The unique identifier of the store to which the terminal is assigned.
    */
    'assignedToStore'?: string;
    /**
    * The date and time when an event has been completed.
    */
    'eventDate': string;
    /**
    * The PSP reference of the request from which the notification originates.
    */
    'pspReference': string;
    /**
    * The unique identifier of the terminal.
    */
    'uniqueTerminalId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assignedToAccount",
            "baseName": "assignedToAccount",
            "type": "string"
        },
        {
            "name": "assignedToStore",
            "baseName": "assignedToStore",
            "type": "string"
        },
        {
            "name": "eventDate",
            "baseName": "eventDate",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "uniqueTerminalId",
            "baseName": "uniqueTerminalId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalAssignmentNotificationRequest.attributeTypeMap;
    }
}

