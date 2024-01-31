import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
    name: 'chatbot_qa',
    title: 'Chatbot QA',
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
            name: "qa_pairs",
            title: "QA Pairs Array",
            type: "array",
            of: [
                defineArrayMember({
                    type: "document",
                    name: "qa_pair",
                    fields: [
                        defineField({
                            name: "question",
                            type: "string",
                            title: "Question"
                        }),
                        defineField({
                            name: "answer",
                            type: "string",
                            title: "Answer"
                        })
                    ]
                })
            ]
        })
    ],
  })