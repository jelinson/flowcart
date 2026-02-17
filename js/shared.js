function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const data = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('#')) continue;

    const values = line.split(',').map(v => v.trim());

    if (values.length < 1 || !values[0]) {
      throw new Error(`Line ${i + 1}: Need at least Store`);
    }

    const parseBoolean = (val) => {
      if (!val) return false;
      const lower = val.toLowerCase();
      return lower === 'true' || lower === 't' || lower === '1' || lower === 'x' || lower === 'yes';
    };

    data.push({
      store: values[0],
      region: values[1] || null,
      item: values[2] || '',
      count: parseBoolean(values[3]),
      note: parseBoolean(values[4])
    });
  }

  return data;
}

function organizeData(data) {
  const organized = {};

  data.forEach(row => {
    if (!organized[row.store]) {
      organized[row.store] = {};
    }
    const regionKey = row.region || '_no_region_';
    if (!organized[row.store][regionKey]) {
      organized[row.store][regionKey] = [];
    }
    organized[row.store][regionKey].push(row);
  });

  return organized;
}

function renderList(container, organized) {
  for (const [store, regions] of Object.entries(organized)) {
    const storeSection = document.createElement('div');
    storeSection.className = 'store-section';

    const storeHeader = document.createElement('div');
    storeHeader.className = 'store-header';
    storeHeader.textContent = store;
    storeSection.appendChild(storeHeader);

    for (const [region, items] of Object.entries(regions)) {
      const regionSection = document.createElement('div');
      regionSection.className = 'region-section';

      if (region !== '_no_region_') {
        const regionHeader = document.createElement('div');
        regionHeader.className = 'region-header';
        regionHeader.textContent = region;
        regionSection.appendChild(regionHeader);
      }

      items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const checkbox = document.createElement('div');
        checkbox.className = 'checkbox';
        itemDiv.appendChild(checkbox);

        const content = document.createElement('div');
        content.className = 'item-content';

        if (!item.item || item.item === '[BLANK]') {
          content.className += ' blank-item';
        } else {
          const itemName = document.createElement('span');
          itemName.className = 'item-name';
          const capitalizedText = item.item
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
          itemName.textContent = capitalizedText;
          content.appendChild(itemName);

          if (item.count) {
            const countLabel = document.createElement('span');
            countLabel.textContent = 'Qty: ';
            countLabel.style.fontSize = '6pt';
            countLabel.style.marginLeft = '4px';
            content.appendChild(countLabel);

            const countSpan = document.createElement('span');
            countSpan.className = 'item-count';
            content.appendChild(countSpan);
          }

          if (item.note) {
            const noteSpan = document.createElement('span');
            noteSpan.className = 'item-note';
            content.appendChild(noteSpan);
          }
        }

        itemDiv.appendChild(content);
        regionSection.appendChild(itemDiv);
      });

      storeSection.appendChild(regionSection);
    }

    container.appendChild(storeSection);
  }
}
