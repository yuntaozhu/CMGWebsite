import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'developer',
  title: 'Developer',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: "Kindly add a profile picture to introduce the developer's face to the world."
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      description: "Kindly add a first name for the developer."
    }),
    defineField({
      name: "middleName",
      title: "Middle Name",
      type: "string"
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      description: "Kindly add a last name for the developer."
    }),
    defineField({
      name: "suffix",
      title: "Suffix",
      type: "string"
    }),
    defineField({
      name: "batch",
      title: "Organization Batch",
      type: "string",
      description: "Kindly indicate the batch of the developer."
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "This field is not required, but kindly indicate an email, so that others can contact this developer."
    }),
    defineField({
      name: "bio",
      title: "Personal Bio",
      type: "string",
      description: "Kindly add a Personal Bio to tell more about this developer."
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn Profile Link",
      type: "string",
      description: "This field is not required, but kindly indicate a LinkedIn Profile so that other people can connect with this developer."
    }),
    defineField({
      name: "github",
      title: "GitHub Profile Link",
      type: "string",
      description: "This field is not required, but kindly indicate a GitHub Profile so that other people can check the projects made by this developer."
    }),
    defineField({
      name: "skills",
      title: "Team",
      type: "array",
      of: [
        defineArrayMember({
          type: "string"
        })
      ]
    }),
    defineField({
      name: "team",
      title: "Team",
      type: "reference",
      to: [{ type: "team"}],
      description: "Kindly indicate the team of the developer."
    })
  ],
  preview: {
    select: {
      media: 'image',
      firstName: "firstName",
      lastName: "lastName",
    },
    prepare: ({media, firstName, lastName}) => {
      return {
        title: `${firstName} ${lastName}`,
        media
      }
    }
  },
})
