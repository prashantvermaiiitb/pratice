import { useState } from "react";
import { OrganiserList } from "../organiser/organiser.styles";
import {
  EventDiv,
  EventDivWithChildCollapsed,
  EventDivWithChildExpanded,
} from "./event.styles";

/**
 * Forming the Event DIV
 * @param {*} param0
 * @returns
 */
const Event = ({ eventToHightLight, item: { id, name, children } }) => {
  //true or false will decide what to show on the screen + or -
  const [isCollapsed, setIsCollapsed] = useState(true);
  const hasItems = Array.isArray(children) && children.length > 0;

  const value = hasItems ? (isCollapsed ? "-" : "+") : "";
  const childCount = hasItems ? children.length : 0;
  const isEventToHighlight = Number(eventToHightLight) === Number(id);

  /**
   * Expand collapse functionality for the list
   */
  const doExpand = () => {
    setIsCollapsed(!isCollapsed);
  };

  /**
   * Generating only Event Div
   * @param {*} props
   * @returns
   */
  const getEventDiv = (props = {}, CustomElement = EventDiv) => {
    return (
      <CustomElement
        highlight={isEventToHighlight}
        childcount={childCount}
        {...props}
      >
        {name}
      </CustomElement>
    );
  };

  /**
   * Generating the Event Div with children
   * @returns
   */
  const getEventDivWithChildren = () => {
    const CustomEventDiv = !isCollapsed
      ? EventDivWithChildCollapsed
      : EventDivWithChildExpanded;
    return getEventDiv({ onClick: doExpand }, CustomEventDiv);
  };

  /**
   * Generating the event list.
   * @param {*} eventToHightLight
   * @returns
   */
  const getOrganiserList = (eventToHightLight) => {
    return (
      <OrganiserList>
        {getEventDivWithChildren()}
        {isCollapsed &&
          hasItems &&
          children.map((item, index) => {
            return (
              <ul key={index}>
                <Event item={item} eventToHightLight={eventToHightLight} />
              </ul>
            );
          })}
      </OrganiserList>
    );
  };

  return hasItems ? getOrganiserList(eventToHightLight) : getEventDiv();
};

export default Event;
