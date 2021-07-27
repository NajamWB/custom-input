<template>
  <div>
    <input-data
      v-if="showInput"
      :linkValue="tmpValue"
      :selectedType="tmpSelectedType"
      @onClose="onClose"
      @onChange="onChange"
    />
    <input-container v-show="!showInput">
      <input-view-wrapper>
        <link-tab :isClicked="newLinkClicked" id="linkTypeSelection" />
        <styled-title>{{ showText }}</styled-title>
        <delete-image v-if="showDeleteButton" :src="deleteIcon" @click="onClearInput" />
        <new-tab :isClicked="newTabClicked" @onClick="onNewTabLink" />
      </input-view-wrapper>
      <b-popover target="linkTypeSelection" triggers="click" placement="left">
        <popover-view :selectedType="selectedType" />
      </b-popover>
    </input-container>
  </div>
</template>

<script>
import styled from "vue-styled-components";
import linkTab from "./LinkTab.vue";
import newTab from "./NewTab.vue";
import PopoverView from "./Popover.vue";
import { BPopover } from "bootstrap-vue";
import InputData from "./InputData.vue";
import { mapGetters } from "vuex";

const InputContainer = styled.div`
  padding: 0px;
  width: 251px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #bcc2cb;
  box-sizing: border-box;
  border-radius: 8px;
`;

const InputViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

const DeleteImage = styled.img`
  padding-right: 12px;
  cursor: pointer;
`;

const StyledTitle = styled.span`
  width: 65%;
  padding: 0 11px;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default {
  name: "custom-input",
  props: {
    tabClicked: {
      type: Boolean,
      default: false
    },
    linkClicked: {
      type: Boolean,
      default: false
    }
  },
  components: {
    linkTab,
    newTab,
    StyledTitle,
    PopoverView,
    InputContainer,
    InputViewWrapper,
    DeleteImage,
    BPopover,
    InputData
  },
  data() {
    return {
      newTabClicked: false,
      newLinkClicked: false,
      selectedType: "",
      linkValue: "",
      showInput: false,
      tmpSelectedType: "",
      tmpValue: ""
    };
  },
  watch: {
    tabClicked() {
      this.newTabClicked = this.tabClicked;
    },
    linkClicked() {
      this.newLinkClicked = this.linkClicked;
      if (this.linkClicked) {
        this.$root.$emit("bv::show::popover", "linkTypeSelection");
      } else {
        this.$root.$emit("bv::hide::popover", "linkTypeSelection");
      }
    },
    getLinkType() {
      this.onSelection(this.getLinkType);
    }
  },
  computed: {
    ...mapGetters({ getLinkType: "getLinkType" }),
    deleteIcon() {
      return require("./assets/delete.svg");
    },
    showText() {
      return this.linkValue || "URL";
    },
    showDeleteButton() {
      return this.linkValue !== "";
    }
  },
  methods: {
    onSelection(type) {
      this.tmpValue = this.selectedType === type ? this.linkValue : "";
      this.newLinkClicked = !this.newLinkClicked;
      this.tmpSelectedType = type;
      this.newLinkClicked = false;
      this.showInput = true;
    },
    onNewTabLink() {
      this.newTabClicked = !this.newTabClicked;
      this.$emit("onTabClick", this.newTabClicked);
    },
    onClose() {
      this.showInput = false;
    },
    onChange(data) {
      this.newLinkClicked = true;
      this.selectedType = this.tmpSelectedType;
      this.linkValue = data;
      this.onClose();
      this.$emit("onChange", data);
      this.$emit("onSelectType", this.selectedType);
      this.$emit("onLinkClick", this.newLinkClicked);
    },
    onClearInput() {
      this.linkValue = "";
      this.newLinkClicked = false;
      this.selectedType = "";
    }
  }
};
</script>
