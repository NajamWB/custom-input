<template>
  <main-container>
    <Item
      icon="email"
      label="Link to Email"
      :selectedType="selectedType"
      @onClick="$emit('onClick', $event)"
    />
    <Item
      icon="url"
      label="Link to Page"
      :selectedType="selectedType"
      @onClick="$emit('onClick', $event)"
    />
    <Item
      icon="mobile"
      label="Link to Mobile"
      :selectedType="selectedType"
      @onClick="$emit('onClick', $event)"
    />
  </main-container>
</template>

<script>
import styled from "vue-styled-components";
import Item from "./PopoverItem.vue";

const MainContainer = styled.div`
  width: 150px;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgb(23 6 34 / 10%);
`;

export default {
  name: "propover",
  props: {
    selectedType: {
      type: String,
      default: ""
    }
  },
  components: {
    MainContainer,
    Item
  },
  computed: {
    leftIcon() {
      return requrie("./assets/popover-icon.svg");
    }
  }
};
</script>
