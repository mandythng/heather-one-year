const REGISTRY_SHEETS = {
  gifts: 'Gifts',
  responses: 'Responses',
};

const GIFT_COLUMNS = [
  'id',
  'name',
  'description',
  'price_sgd',
  'target_sgd',
  'link',
  'image',
  'mode',
  'sort_order',
  'active',
];

const RESPONSE_COLUMNS = [
  'timestamp',
  'gift_id',
  'guest_name',
  'response_type',
  'amount_sgd',
  'note',
  'response_id',
  'edit_token',
  'cancels_response_id',
];

const ALLOWED_RESPONSE_TYPES = ['reserve', 'contribute', 'purchased', 'note', 'undo'];

const STARTER_GIFTS = [
  ['balance-bicycle', 'Balance Bicycle', 'A first little bike for practising balance before pedals.', 85, 85, 'https://shopee.sg/product/219809020/26828670213?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEbgAAAAyFPVFI5hyFun4-JW4RFsVnMX0zuOXf7adoPq2qSE0YUR52bOtO8lq4Hfs8jYVEsd1jJxGFj3FkoQsp3iN7QkhJ__-_i9kYaUQD4R84wYU66OecQvDPgF_38WZvdZOfzUAsnQGghIdahY7Y&gad_source=1&gad_campaignid=23295230387&gbraid=0AAAAADPpRQTGSbd9wghfxYGCX9HBlpUI3&gclid=CjwKCAjwt7XQBhBkEiwAtStpp1787yT9FCbQ6sSXuSeEUqPattPnBFHZ-wWpTzTPD5BUaTnR9_M4lxoCY4cQAvD_BwE', 'assets/registry/gift-balance-bicycle.png', 'claim_or_contribute', 1, true],
  ['pikler-triangle', 'Pikler Triangle', 'A climbing frame for gross motor play at home.', '149 - 220', 220, 'Carousell 1|https://www.carousell.sg/p/playfull-tribe-pikler-triangle-1436261418/?t-id=oNFKi1OfxP_1779280024006&t-referrer_browse_type=search_results&t-referrer_context=category_slp&t-referrer_request_id=OEAoga9AsjGElkIb&t-referrer_search_query=pikler%20triangle&t-referrer_source=search_landing&t-tap_index=2\nCarousell 2|https://www.carousell.sg/p/leo-cru-pikler-triangle-platte-set-with-double-sided-ramp-price-negotiable-1439036569/?t-id=oNFKi1OfxP_1779280024006&t-referrer_browse_type=search_results&t-referrer_context=category_slp&t-referrer_request_id=OEAoga9AsjGElkIb&t-referrer_search_query=pikler%20triangle&t-referrer_source=search_landing&t-tap_index=0\nShopee|https://shopee.sg/product/575592772/20493536638?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEbgAAAAwoa46fOCShlnfv_YTrjybr9JuZeUMUWJ12H91-gU37PKFSTFi_WRKwxUbjPf5zoENBL--SPM3gB2wzSfi1O6e9aY2WfijmlQNdWGZwolnQStNWK8gLNz37huob3JDZNXiw2vkOC-JyAcGO&gad_source=1&gad_campaignid=23664439582&gbraid=0AAAAADPpRQRz6_4dW1YswaCY4LdDK44nD&gclid=CjwKCAjwt7XQBhBkEiwAtStpp0s2CB7o8J6C9WMSekY76hZnRVlD8KPN1fvxVSdHZUir8XId8EhchxoCaIUQAvD_BwE\nShopee 2|https://shopee.sg/product/154528749/8851167916?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEbAAAAAypnDoYGclOjS4decztbK7hVIWYisQ_mfWSVfsEhSpswqzy9-8pV7zXEM-DvArXwmd99JkIVDuo8Bw4t6X6IkIBrf11MmJ_4wXLDAmSojwYEbbR8S1r5Swdfb-jkcxqN8CcuMYnR3HXHw&gad_source=1&gad_campaignid=23664439582&gbraid=0AAAAADPpRQRz6_4dW1YswaCY4LdDK44nD&gclid=CjwKCAjwt7XQBhBkEiwAtStpp0FXh73WCgSHN9Xfi7CJx8UagHJKedxm5aKJOtMKKZ0jrHa1gbqUKBoCDlYQAvD_BwE', 'assets/registry/gift-pikler-triangle.png', 'claim_or_contribute', 2, true],
  ['books', 'Books', 'Heather loves board books, picture books, lift-the-flap books, pop-up books, and books with music.', '', '', '', 'assets/registry/gift-books.png', 'multi_claim', 3, true],
  ['wooden-blocks', 'Wooden Blocks', 'Classic stacking blocks she can build, knock down, and rediscover.', 21, 21, 'https://shopee.sg/product/428619551/20031069116?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEbgAAAAwjjXXViwGCHfvTQHd-fRv5eho6OxA6THa6W1RvpLx_uPQrWKFDjoGoyU0t_8oi4ihOC46IBkeUWOjV_ZL2vpnJ3WHHZnp4N0StFbXiM9PsTCL010IHGDEsDb1bkTJBKCR4ti9JHP3-yTYK', 'assets/registry/gift-wooden-blocks.png', 'claim_or_contribute', 4, true],
  ['babbler-play-kit', 'Lovevery Babbler Play Kit', 'A toddler play kit with Montessori-style toys for problem solving and pretend play.', '70 - 175', 175, 'Lovevery|https://lovevery.com/products/the-play-kits-the-babbler\nCarousell 1|https://www.carousell.sg/p/lovevery-the-babbler-play-kit-13-15-months-1438305500/?t-id=oNFKi1OfxP_1779280024006&t-referrer_browse_type=search_results&t-referrer_context=global_slp&t-referrer_request_id=Q-2lVjZay_rqhh9A&t-referrer_search_query=lovevery%20babbler&t-referrer_source=search_landing&t-tap_index=0\nCarousell 2|https://www.carousell.sg/p/bnib-lovevery-the-babbler-play-kit-1433149176/?t-id=oNFKi1OfxP_1779280024006&t-referrer_browse_type=search_results&t-referrer_context=global_slp&t-referrer_request_id=Q-2lVjZay_rqhh9A&t-referrer_search_query=lovevery%20babbler&t-referrer_source=search_landing&t-tap_index=2', 'assets/registry/gift-babbler-play-kit.png', 'claim_or_contribute', 5, true],
  ['montessori-bookshelf', 'Montessori Bookshelf', 'A front-facing wooden bookshelf so Heather can see and choose her own books.', '150 - 300', 300, 'Shopee|https://shopee.sg/Montessori-Bookshelf-Toyshelf-Wooden-i.114383105.22166056662\nCarousell|https://www.carousell.sg/p/loft-home-montessori-bookshelf-bookcase-1431858538/?t-id=oNFKi1OfxP_1779280024006&t-referrer_browse_type=search_results&t-referrer_context=global_slp&t-referrer_request_id=SD2AQTQm-udpsao_&t-referrer_search_query=montessori%20bookshelf&t-referrer_source=search_landing&t-tap_index=9\nLeo + Cru|https://leoandcru.com/products/tilly-montessori-bookshelf', 'assets/registry/gift-montessori-bookshelf.png', 'claim_or_contribute', 7, true],
  ['palm-grasp-crayons', 'Palm-Grasp Crayons', 'Chunky washable egg crayons that are easier for little hands to grip.', '12 - 23', 23, 'Amazon|https://www.amazon.sg/dp/B0DNLY6PFR/ref=sspa_dk_detail_0?pd_rd_i=B0DNLY6PFR&pd_rd_w=xRLEQ&content-id=amzn1.sym.e8a65a17-9528-4864-b5a1-87609e247ff8&pf_rd_p=e8a65a17-9528-4864-b5a1-87609e247ff8&pf_rd_r=Z9QZ7RVJZT0Q4SXZTKNM&pd_rd_wg=To8MK&pd_rd_r=e3e5c95c-02f7-4b88-8bc3-222c532fdd1e&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1\nPupsik|https://pupsik.sg/products/crayola-my-first-washable-palm-grasp-crayons-6pc?variant=46865442832638&country=SG&currency=SGD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gad_campaignid=17181944803&gbraid=0AAAAAD2pIKID5E7IP05CRfiKM3igbNpn9&gclid=CjwKCAjwt7XQBhBkEiwAtStpp1ueKA7IOHBXf2Ig92tP3XPrgj9LxRThd4D3sMSbjc8wxUSdiSorDhoCZ50QAvD_BwE', 'assets/registry/gift-palm-grasp-crayons.png', 'claim_or_contribute', 8, true],
  ['stacking-cups', 'Stacking Cups', 'Muted nesting cups for stacking, nesting, scooping, and open-ended play.', 22, 22, 'https://pupsik.sg/products/mushie-stacking-cups-toy-4-colors?variant=46865185997054', 'assets/registry/gift-stacking-cups.png', 'claim_or_contribute', 9, true],
  ['busy-board', 'Busy Board', 'A wooden activity board with latches, zips, knobs, and little problem-solving bits.', '', '', '', 'assets/registry/gift-busy-board.png', 'claim_or_contribute', 10, true],
  ['ball-pit-balls', 'Plastic Balls for Ball Pit', 'Neutral plastic balls to top up Heather\'s ball pit for soft play.', 28, 28, 'https://shopee.sg/product/5696946/6326165441?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEaAAAAAwt-kkOTp0X81699RARyJV50qNRa_YyiNqdAUTi-EmD7VTtMZmrnq7nQHyuQJZvArKmlw9Hwa8OCAJpRaaOzLsxLUHAUHVQ367uPOShiC2yjfmb_F_h4scQgnnVsyCepAozj_YW&gad_source=1&gad_campaignid=23295224318&gbraid=0AAAAADPpRQRFmUkuVj0hqjFVZikqCSI_R&gclid=CjwKCAjwt7XQBhBkEiwAtStpp1YbKnz-_bst8HkgyYori2du9cKnOZoTU5HoVl90TIJV3z39Bi3SuBoCwKwQAvD_BwE', 'assets/registry/gift-ball-pit-balls.png', 'claim_or_contribute', 11, true],
  ['ball-pit-balls-additional-100', 'Plastic Balls for Ball Pit (additional 100)', 'Neutral plastic balls to top up Heather\'s ball pit for soft play.', 28, 28, 'https://shopee.sg/product/5696946/6326165441?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEaAAAAAwt-kkOTp0X81699RARyJV50qNRa_YyiNqdAUTi-EmD7VTtMZmrnq7nQHyuQJZvArKmlw9Hwa8OCAJpRaaOzLsxLUHAUHVQ367uPOShiC2yjfmb_F_h4scQgnnVsyCepAozj_YW&gad_source=1&gad_campaignid=23295224318&gbraid=0AAAAADPpRQRFmUkuVj0hqjFVZikqCSI_R&gclid=CjwKCAjwt7XQBhBkEiwAtStpp1YbKnz-_bst8HkgyYori2du9cKnOZoTU5HoVl90TIJV3z39Bi3SuBoCwKwQAvD_BwE', 'assets/registry/gift-ball-pit-balls.png', 'claim_or_contribute', 11.5, true],
  ['building-bath-toy-set', 'Building Bath Toy Set', 'A bath-time pipe set for pouring, connecting, and watching water flow.', 34, 34, 'Amazon|https://www.amazon.sg/Boon-Pipes-Water-Bath-Toy/dp/B00R0V7PUU/ref=pd_sim_d_sccl_3_4/355-5434235-6533322?pd_rd_w=ZWip8&content-id=amzn1.sym.6a562875-c67f-47f5-bae6-13ca2b1d8a3b&pf_rd_p=6a562875-c67f-47f5-bae6-13ca2b1d8a3b&pf_rd_r=J76MSFS7QK7NBS8GW5MV&pd_rd_wg=OxVhw&pd_rd_r=7ccaa5ae-2310-4311-b94f-9e864df998f4&pd_rd_i=B00R0V7PUU&th=1', 'assets/registry/gift-building-bath-toy-set.png', 'claim_or_contribute', 12, true],
];

function setupRegistrySheets() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const gifts = spreadsheet.getSheetByName(REGISTRY_SHEETS.gifts) || spreadsheet.insertSheet(REGISTRY_SHEETS.gifts);
  const responses = spreadsheet.getSheetByName(REGISTRY_SHEETS.responses) || spreadsheet.insertSheet(REGISTRY_SHEETS.responses);

  gifts.clear();
  gifts.getRange(1, 1, 1, GIFT_COLUMNS.length).setValues([GIFT_COLUMNS]);
  gifts.getRange(2, 1, STARTER_GIFTS.length, GIFT_COLUMNS.length).setValues(STARTER_GIFTS);

  responses.clear();
  responses.getRange(1, 1, 1, RESPONSE_COLUMNS.length).setValues([RESPONSE_COLUMNS]);

  gifts.setFrozenRows(1);
  responses.setFrozenRows(1);
  gifts.autoResizeColumns(1, GIFT_COLUMNS.length);
  responses.autoResizeColumns(1, RESPONSE_COLUMNS.length);
}

function doGet() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const gifts = readSheetObjects_(spreadsheet, REGISTRY_SHEETS.gifts, GIFT_COLUMNS)
      .filter((gift) => parseBoolean_(gift.active) !== false)
      .sort((a, b) => Number(a.sort_order || 0) - Number(b.sort_order || 0));
    const responses = readSheetObjects_(spreadsheet, REGISTRY_SHEETS.responses, RESPONSE_COLUMNS);

    return json_({
      gifts: gifts.map(normalizeGift_),
      responses: responses.map(normalizeResponse_),
    });
  } catch (error) {
    return json_({ ok: false, error: error.message || String(error) });
  }
}

function doPost(event) {
  try {
    const body = parseBody_(event);
    const response = validateResponse_(body);
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getSheet_(spreadsheet, REGISTRY_SHEETS.responses);

    ensureHeader_(sheet, RESPONSE_COLUMNS);
    if (response.response_type === 'undo') {
      validateUndo_(sheet, response);
    }
    sheet.appendRow([
      new Date(),
      response.gift_id,
      response.guest_name,
      response.response_type,
      response.amount_sgd,
      response.note,
      response.response_id,
      response.edit_token,
      response.cancels_response_id,
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: error.message || String(error) });
  }
}

function readSheetObjects_(spreadsheet, sheetName, expectedColumns) {
  const sheet = getSheet_(spreadsheet, sheetName);
  ensureHeader_(sheet, expectedColumns);

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  const headers = values[0].map((value) => String(value).trim());
  const indexes = expectedColumns.map((column) => headers.indexOf(column));

  return values.slice(1)
    .filter((row) => row.some((cell) => cell !== ''))
    .map((row) => {
      return expectedColumns.reduce((object, column, index) => {
        object[column] = indexes[index] >= 0 ? row[indexes[index]] : '';
        return object;
      }, {});
    });
}

function getSheet_(spreadsheet, sheetName) {
  const sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) throw new Error('Missing sheet: ' + sheetName);
  return sheet;
}

function ensureHeader_(sheet, expectedColumns) {
  const lastColumn = Math.max(sheet.getLastColumn(), expectedColumns.length);
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0]
    .map((value) => String(value).trim())
    .filter(Boolean);
  const missingColumns = expectedColumns.filter((column) => headers.indexOf(column) === -1);

  if (missingColumns.length) {
    sheet.getRange(1, headers.length + 1, 1, missingColumns.length).setValues([missingColumns]);
  }
}

function parseBody_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    throw new Error('Missing JSON body');
  }

  try {
    return JSON.parse(event.postData.contents);
  } catch (error) {
    throw new Error('Invalid JSON body');
  }
}

function validateResponse_(body) {
  const response = {
    gift_id: cleanString_(body.gift_id),
    guest_name: cleanString_(body.guest_name),
    response_type: cleanString_(body.response_type || 'reserve'),
    amount_sgd: body.amount_sgd === undefined || body.amount_sgd === null || body.amount_sgd === ''
      ? ''
      : Number(body.amount_sgd),
    note: cleanString_(body.note || ''),
    response_id: cleanString_(body.response_id || Utilities.getUuid()),
    edit_token: cleanString_(body.edit_token || ''),
    cancels_response_id: cleanString_(body.cancels_response_id || ''),
  };

  if (!response.gift_id) throw new Error('gift_id is required');
  if (!response.guest_name) throw new Error('guest_name is required');
  if (ALLOWED_RESPONSE_TYPES.indexOf(response.response_type) === -1) {
    throw new Error('response_type must be one of: ' + ALLOWED_RESPONSE_TYPES.join(', '));
  }
  if (response.amount_sgd !== '' && (!isFinite(response.amount_sgd) || response.amount_sgd < 0)) {
    throw new Error('amount_sgd must be a positive number');
  }
  if (response.response_type === 'undo') {
    if (!response.cancels_response_id) throw new Error('cancels_response_id is required');
    if (!response.edit_token) throw new Error('edit_token is required');
  }

  return response;
}

function validateUndo_(sheet, response) {
  const responses = readSheetObjects_(SpreadsheetApp.getActiveSpreadsheet(), REGISTRY_SHEETS.responses, RESPONSE_COLUMNS);
  const target = responses.find((row) => cleanString_(row.response_id) === response.cancels_response_id);
  if (!target) throw new Error('Could not find the response to undo');
  if (cleanString_(target.edit_token) !== response.edit_token) throw new Error('Undo token did not match');
  if (target.response_type === 'undo') throw new Error('Cannot undo an undo row');
  const alreadyUndone = responses.some((row) => {
    return cleanString_(row.response_type) === 'undo'
      && cleanString_(row.cancels_response_id) === response.cancels_response_id;
  });
  if (alreadyUndone) throw new Error('This response has already been undone');
}

function normalizeGift_(gift) {
  return {
    id: cleanString_(gift.id),
    name: cleanString_(gift.name),
    description: cleanString_(gift.description),
    price_sgd: toNumberOrCleanString_(gift.price_sgd),
    target_sgd: toNumberOrBlank_(gift.target_sgd),
    link: cleanString_(gift.link),
    image: cleanString_(gift.image),
    mode: cleanString_(gift.mode),
    sort_order: toNumberOrBlank_(gift.sort_order),
    active: parseBoolean_(gift.active) !== false,
  };
}

function normalizeResponse_(response) {
  return {
    timestamp: response.timestamp instanceof Date
      ? response.timestamp.toISOString()
      : cleanString_(response.timestamp),
    gift_id: cleanString_(response.gift_id),
    guest_name: cleanString_(response.guest_name),
    response_type: cleanString_(response.response_type),
    amount_sgd: toNumberOrBlank_(response.amount_sgd),
    note: cleanString_(response.note),
    response_id: cleanString_(response.response_id),
    cancels_response_id: cleanString_(response.cancels_response_id),
  };
}

function cleanString_(value) {
  return String(value === undefined || value === null ? '' : value).trim();
}

function toNumberOrBlank_(value) {
  if (value === '' || value === undefined || value === null) return '';
  const number = Number(value);
  return isFinite(number) ? number : '';
}

function toNumberOrCleanString_(value) {
  if (value === '' || value === undefined || value === null) return '';
  const number = Number(value);
  return isFinite(number) ? number : cleanString_(value);
}

function parseBoolean_(value) {
  if (typeof value === 'boolean') return value;
  const normalized = cleanString_(value).toLowerCase();
  if (['false', 'no', 'n', '0', 'inactive'].indexOf(normalized) !== -1) return false;
  if (['true', 'yes', 'y', '1', 'active', ''].indexOf(normalized) !== -1) return true;
  return Boolean(value);
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
