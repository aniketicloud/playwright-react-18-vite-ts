import{w as p,e as n,u as B}from"./index-B0WQZsCq.js";import{P as d}from"./Page-Chd2MbgY.js";import"./index-BdlRumKp.js";import"./jsx-runtime-CzbbXsaA.js";import"./index-DLjnpb--.js";import"./Header-KpwhzpcS.js";import"./Button-C8MFFFXh.js";const D={title:"Example/Page",component:d,parameters:{layout:"fullscreen"}},t={},o={play:async({canvasElement:g})=>{const a=p(g),e=a.getByRole("button",{name:/Log in/i});await n(e).toBeInTheDocument(),await B.click(e),await n(e).not.toBeInTheDocument();const l=a.getByRole("button",{name:/Log out/i});await n(l).toBeInTheDocument()}};var c,s,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const E=["LoggedOut","LoggedIn"];export{o as LoggedIn,t as LoggedOut,E as __namedExportsOrder,D as default};
