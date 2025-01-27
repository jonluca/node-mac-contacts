declare module 'electron-mac-contacts' {
  export interface Contact {
    identifier: string
    // optional
    firstName?: string
    middleName?: string
    lastName?: string
    nickname?: string
    jobTitle?: string
    departmentName?: string
    organizationName?: string
    phoneNumbers?: string[]
    emailAddresses?: string[]
    socialProfiles?: string[]
    instantMessageAddresses?: string[]
    birthday?: string
    note?: string
    name?: string
    contactThumbnailImage?: Buffer
    contactImage?: Buffer
  }

  export type OptionalProperties =
    | 'jobTitle'
    | 'departmentName'
    | 'organizationName'
    | 'middleName'
    | 'note'
    | 'contactImage'
    | 'contactThumbnailImage'
    | 'instantMessageAddresses'
    | 'socialProfiles'

  export function requestAccess(): Promise<boolean>
  export function getAuthStatus(): string
  export function getAllContacts(
    extraProperties?: OptionalProperties[],
  ): Promise<Contact[]>
  export function getContactsByName(
    name: string,
    extraProperties?: OptionalProperties[],
  ): Promise<Contact[]>
  export function addNewContact(contact: Contact): Promise<Contact>
  export function updateContact(contact: Contact): Promise<Contact>
  export function deleteContact(contact: Contact): Promise<void>
}
