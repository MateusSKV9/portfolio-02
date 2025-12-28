export function applyStyles(root, stylesMap, styles) {
  Object.entries(stylesMap).forEach(([selector, classString]) => {
    const elements = root.querySelectorAll(selector);

    elements.forEach((el) => {
      const classNames = classString.split(" ");
      
      classNames.forEach((name) => {
        // Pega a versão "hash" do CSS Module (ex: _group_xyz)
        const mappedClass = styles[name]; 
        if (mappedClass) {
          el.classList.add(mappedClass);
        }
      });
    });
  });
}