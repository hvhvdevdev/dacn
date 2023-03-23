<template>
  <div>
    <p class="v-label">{{ label }}</p>
    <TiptapVuetify
      :extensions="extensions"
      :value="value"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from 'tiptap-vuetify'

export default {
  name: 'RichTextEditor',
  components: { TiptapVuetify },
  props: {
    value: {
      type: String,
      required: false,
      default: () => '',
    },
    label: {
      type: String,
      required: false,
      default: () => 'Content',
    },
  },
  emits: ['input'],
  data() {
    return {
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
    }
  },
}
</script>

<style scoped></style>
