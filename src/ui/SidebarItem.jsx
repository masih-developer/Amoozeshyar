import { AccordionItem } from "@szhsin/react-accordion";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, title, links, initialEntered = false }) => {
  return (
    <AccordionItem
      initialEntered={initialEntered}
      buttonProps={{
        className: ({ isEnter }) =>
          `flex items-center justify-between hover:bg-white hover:text-primary-darker transition-colors p-2 rounded-lg w-full${
            isEnter ? " bg-white text-primary-darker" : ""
          }`,
      }}
      header={({ state: { isEnter } }) => (
        <>
          <div className="flex items-center gap-x-2">
            {icon && icon}
            {title}
          </div>
          {icon && (
            <RiArrowDownSLine
              className={`text-xl transition-transform${
                isEnter ? " rotate-180" : ""
              }`}
            />
          )}
        </>
      )}
      contentProps={{
        style: { transition: "height 0.25s cubic-bezier(0, 0, 0, 1)" },
      }}
    >
      <ul className="flex flex-col gap-y-3 relative mr-4 pt-5 border-r border-r-white/50 pr-3">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              className={`navlink__item${
                link.title === "انتخاب واحد" ? " navlink__item--active" : ""
              }`}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </AccordionItem>
  );
};

export default SidebarItem;
