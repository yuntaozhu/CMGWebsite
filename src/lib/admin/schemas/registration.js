import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'registration',
    title: 'Registration',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
            source: 'name',
            maxLength: 96,
            },
        }),
        defineField({
            name: 'scriptLink',
            title: 'Script Link',
            type: 'string'
        }),
        defineField({
            name: 'spreadsheetId',
            title: 'Spreadsheet Id',
            type: 'string'
        }),
        defineField({
            name: 'sheetName',
            title: 'Sheet Name',
            type: 'string'
        }),
        defineField({
            name: 'registrationLimit',
            title: 'Registration Limit',
            type: 'number'
        }),
        defineField({
            name: 'openingTime',
            title: 'Opening Time',
            type: 'string'
        })
    ],
  })