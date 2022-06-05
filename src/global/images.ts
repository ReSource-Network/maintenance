export const cloudinaryPath =
  'https://res.cloudinary.com/resource-network/image/upload/v1640210548/resource-protocol/';

export const getImagePath = (fileName: string) => cloudinaryPath + fileName;
//'https://res.cloudinary.com/resource-network/image/upload/v1640214649/resource-protocol/brand/logo-black_tp3gni.svg'

// BRAND IMAGES
export const LOGOTYPE = {
  light: getImagePath('brand/resource-logotype-white_osat1c.svg'),
  dark: getImagePath('brand/resource-logotype-black_lsczap.svg'),
  alt: 'ReSource logotype',
};

// source token
export const SOURCE_PRIMARY = {
  id: 'sourcePrimary',
  imgSrcName: getImagePath('brand/SOURCE_lhkhsm.svg'),
  backgroundMode: 'none',
  imagePaths: {
    '32': getImagePath('brand/SOURCE_32_fl52qd.png'),
    '64': getImagePath('brand/SOURCE_64_bmybpc.png'),
    '96': getImagePath('brand/SOURCE_96_kxl9ma.png'),
    '128': getImagePath('brand/SOURCE_128_frnzbu.png'),
    '150': getImagePath('brand/SOURCE_150_inwlvl.png'),
    '200': getImagePath('brand/SOURCE_200_ire2bj.png'),
    '256': getImagePath('brand/SOURCE_256_jeqesh.png'),
    '512': getImagePath('brand/SOURCE_512_uzjlez.png'),
  },
};
export const SOURCE_INVERSE = {
  id: 'sourceInverse',
  imgSrcName: getImagePath('brand/SOURCE-inverse_lwspib.svg'),
  backgroundMode: 'none',
  imagePaths: {
    '32': getImagePath('brand/SOURCE-inverse_32_q3ruk4.png'),
    '64': getImagePath('brand/SOURCE-inverse_64_uybmtd.png'),
    '96': getImagePath('brand/SOURCE-inverse_96_jlstwh.png'),
    '128': getImagePath('brand/SOURCE-inverse_128_fq2cse.png'),
    '150': getImagePath('brand/SOURCE-inverse_150_evsdng.png'),
    '200': getImagePath('brand/SOURCE-inverse_200_gkt6ir.png'),
    '256': getImagePath('brand/SOURCE-inverse_256_u34umi.png'),
    '512': getImagePath('brand/SOURCE-inverse_512_vcgsp5.png'),
  },
};
// logotype
export const LOGOTYPE_PRIMARY = {
  id: 'logotypePrimary',
  imgSrcName: getImagePath('brand/resource-logotype_iaurum.svg'),
  backgroundMode: 'none',
  imagePaths: {
    '128': getImagePath('brand/resource-logotype_128_umruua.png'),
    '150': getImagePath('brand/resource-logotype_150_xktbzq.png'),
    '200': getImagePath('brand/resource-logotype_200_wsq81r.png'),
    '256': getImagePath('brand/resource-logotype_256_upzsyt.png'),
    '512': getImagePath('brand/resource-logotype_512_hhsq07.png'),
    '1024': getImagePath('brand/resource-logotype_1024_rnsb34.png'),
  },
};
export const LOGOTYPE_WHITE = {
  id: 'logotypeWhite',
  imgSrcName: getImagePath('brand/resource-logotype-white_osat1c.svg'),
  backgroundMode: 'dark-bg',
  imagePaths: {
    '128': getImagePath('brand/resource-logotype-white_128_jzplha.png'),
    '150': getImagePath('brand/resource-logotype-white_150_rulpjw.png'),
    '200': getImagePath('brand/resource-logotype-white_200_xo9bmi.png'),
    '256': getImagePath('brand/resource-logotype-white_256_pwjsrj.png'),
    '512': getImagePath('brand/resource-logotype-white_512_kwphjl.png'),
    '1024': getImagePath('brand/resource-logotype-white_1024_sz4e8l.png'),
  },
};
export const LOGOTYPE_BLACK = {
  id: 'logotypeBlack',
  imgSrcName: getImagePath('brand/resource-logotype-black_lsczap.svg'),
  backgroundMode: 'light-bg',
  imagePaths: {
    '128': getImagePath('brand/resource-logotype-black_128_e7l4s0.png'),
    '150': getImagePath('brand/resource-logotype-black_150_dquhrs.png'),
    '200': getImagePath('brand/resource-logotype-black_200_qt97oi.png'),
    '256': getImagePath('brand/resource-logotype-black_256_taaf4t.png'),
    '512': getImagePath('brand/resource-logotype-black_512_jhlcsy.png'),
    '1024': getImagePath('brand/resource-logotype-black_1024_kmef6c.png'),
  },
};
// logo
export const LOGO_PRIMARY = {
  id: 'logoPrimary',
  imgSrcName: getImagePath('brand/logo_pfzn2n.svg'),
  backgroundMode: 'none',
  imagePaths: {
    '32': getImagePath('brand/logo_32_lkh9r5.png'),
    '48': getImagePath('brand/logo_48_fuqbme.png'),
    '64': getImagePath('brand/logo_64_swsfrb.png'),
    '96': getImagePath('brand/logo_96_zlhqek.png'),
    '128': getImagePath('brand/logo_128_mythe8.png'),
    '150': getImagePath('brand/logo_150_rcaoec.png'),
    '200': getImagePath('brand/logo_200_uzvera.png'),
    '256': getImagePath('brand/logo_256_ffyhem.png'),
    '512': getImagePath('brand/logo_512_oedswd.png'),
  },
};
export const LOGO_INVERSE = {
  id: 'logoInverse',
  imgSrcName: getImagePath('brand/logo-inverted_svuu2n.svg'),
  backgroundMode: 'none',
  imagePaths: {
    '32': getImagePath('brand/logo-inverted_32_g455sv.png'),
    '48': getImagePath('brand/logo-inverted_48_g2netb.png'),
    '64': getImagePath('brand/logo-inverted_64_zw6ekg.png'),
    '96': getImagePath('brand/logo-inverted_96_jf4wfp.png'),
    '128': getImagePath('brand/logo-inverted_128_gsx13a.png'),
    '150': getImagePath('brand/logo-inverted_150_jcrsg4.png'),
    '200': getImagePath('brand/logo-inverted_200_vdnhpi.png'),
    '256': getImagePath('brand/logo-inverted_256_bpnsn3.png'),
    '512': getImagePath('brand/logo-inverted_512_jnabb8.png'),
  },
};
export const LOGO_BLACK = {
  id: 'logoBlack',
  imgSrcName: getImagePath('brand/logo-black_tp3gni.svg'),
  backgroundMode: 'light-bg',
  imagePaths: {
    '32': getImagePath('brand/logo-black_32_ziykye.png'),
    '48': getImagePath('brand/logo-black_48_h5okqh.png'),
    '64': getImagePath('brand/logo-black_64_alrfwc.png'),
    '96': getImagePath('brand/logo-black_96_onmfxd.png'),
    '128': getImagePath('brand/logo-black_128_lgnzko.png'),
    '150': getImagePath('brand/logo-black_150_klo9l8.png'),
    '200': getImagePath('brand/logo-black_200_xamogd.png'),
    '256': getImagePath('brand/logo-black_256_h0r60s.png'),
    '512': getImagePath('brand/logo-black_512_axfkp1.png'),
  },
};
export const LOGO_WHITE = {
  id: 'logoWhite',
  imgSrcName: getImagePath('brand/logo-white_mceufw.svg'),
  backgroundMode: 'dark-bg',
  imagePaths: {
    '32': getImagePath('brand/logo-white_32_cjm6np.png'),
    '48': getImagePath('brand/logo-white_48_cruea4.png'),
    '64': getImagePath('brand/logo-white_64_im5qvh.png'),
    '96': getImagePath('brand/logo-white_96_imyz99.png'),
    '128': getImagePath('brand/logo-white_128_q1vdmt.png'),
    '150': getImagePath('brand/logo-white_150_hgs434.png'),
    '200': getImagePath('brand/logo-white_200_fjrsmw.png'),
    '256': getImagePath('brand/logo-white_256_rnknrt.png'),
    '512': getImagePath('brand/logo-white_512_ocgazp.png'),
  },
};

export const LOGO_VARIATIONS = {
  Logotype: [LOGOTYPE_PRIMARY, LOGOTYPE_WHITE, LOGOTYPE_BLACK],
  'SOURCE Token': [SOURCE_PRIMARY, SOURCE_INVERSE],
  Logo: [LOGO_PRIMARY, LOGO_INVERSE, LOGO_WHITE, LOGO_BLACK],
};

// BACKGROUNDS
export const BACKGROUND = {
  dark: getImagePath('nibera/stars-bg-L_oiuvo3.png'),
  light: getImagePath('nibera/stars-bg_pviyxw.png'),
  alt: 'subtle stars',
};
export const PLANTS_OVERLAY = {
  dark: getImagePath('backgrounds/website-bg-0_s8a2pm'),
  light: getImagePath('backgrounds/website-bg-0_s8a2pm'),
  alt: 'plants overaly',
};

// ARTIST IMAGES
export const NIBERA_1_PERSON_MOUNTAINS_IMG = {
  light: getImagePath('nibera/1-L_pjig37.jpg'),
  dark: getImagePath('nibera/1_xgm2yy.jpg'),
  alt: 'Person looking at planet from top of mountains art by Nibera Visuals',
};
export const NIBERA_2_BUG_FLOWER_EARTH_IMG = {
  light: getImagePath('nibera/2-L_amdtrm.jpg'),
  dark: getImagePath('nibera/2_zrlg5e.jpg'),
  alt: 'Plants and animals blooming flowers art by Nibera Visuals',
};
export const NIBERA_3_SPACE_SHAPES_IMG = {
  light: getImagePath('nibera/3-L_p2ffp2.jpg'),
  dark: getImagePath('nibera/3_xrl3sh.jpg'),
  alt: 'Mountains landscape space sky with pleants and shapes floating by Nibera Visuals',
};
export const NIBERA_4_ISOMETRIC_PATH_IMG = {
  light: getImagePath('nibera/4-L_oycdww.jpg'),
  dark: getImagePath('nibera/4_h5bwtq.jpg'),
  alt: 'Person walking on isometric path in space art by Nibera Visuals',
};
export const NIBERA_5_SPACE_BALL_GRID_IMG = {
  light: getImagePath('nibera/5-L_zplbns.jpg'),
  dark: getImagePath('nibera/5_zrka3f.jpg'),
  alt: 'Black ball flying through grid with beautiful colors in space art by Nibera Visuals',
};
export const NIBERA_6_PERSON_MOUNTAIN_TOP_IMG = {
  light: getImagePath('nibera/6-L_cjjcdy.jpg'),
  dark: getImagePath('nibera/6_npq6uh.jpg'),
  alt: 'Person hiking on top of mountains art by Nibera Visuals',
};
export const NIBERA_7_MOUNTAIN_PATTERN_IMG = {
  light: getImagePath('nibera/7_u89lhs.jpg'),
  dark: getImagePath('nibera/7_u89lhs.jpg'),
  alt: 'Mountains overlay pattern art by Nibera Visuals',
};
export const NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG = {
  light: getImagePath('nibera/8-L_kkt8nc.jpg'),
  dark: getImagePath('nibera/8_eq2w3w.jpg'),
  alt: 'Field of flowers below mountain and sun art by Nibera Visuals',
};
export const NIBERA_9_WOLF_MOON_IMG = {
  light: getImagePath('nibera/9-L_e4ufjs.jpg'),
  dark: getImagePath('nibera/9_pnxix8.jpg'),
  alt: 'Wolf howling at moon art by Nibera Visuals',
};
export const NIBERA_10_JUNGLE_CITY_IMG = {
  light: getImagePath('nibera/10_zch1kr.jpg'),
  dark: getImagePath('nibera/10_zch1kr.jpg'),
  alt: 'Thriving jungle buildings local economy art commissioned by Nibera Visuals',
};
export const NIBERA_11_EARTH_PLATFORMS_IMG = {
  light: getImagePath('nibera/11-L_u1bguu.jpg'),
  dark: getImagePath('nibera/11_pbilyz.jpg'),
  alt: 'Earth and plants floating on platforms in space art by Nibera Visuals',
};
export const NIBERA_12_PEOPLE_PLATFORMS_IMG = {
  light: getImagePath('nibera/12-L_fa3h5y.jpg'),
  dark: getImagePath('nibera/12_hqid7x.jpg'),
  alt: 'People in digital marketplace art by Nibera Visuals',
};

// OTHER IMAGE ASSETS
export const R_GLOBE_IMG = {
  light: getImagePath('nibera/rglobe-w_vraspf.png'),
  dark: getImagePath('nibera/rglobe_rg6fao.png'),
  alt: 'Globe with RSD circling around it',
};
export const SOURCE_DISTRIBUTION_IMG = {
  light: getImagePath('infographics/tokenomics-light_syvvrd.png'),
  dark: getImagePath('infographics/tokenomics-dark_e3x4c6.png'),
  alt: 'SOURCE token distribution and allocation chart',
};
export const HIW_RAND_A_IMG = {
  light: getImagePath('a_zhjd2z.jpg'),
  dark: getImagePath('a_zhjd2z.jpg'),
  alt: 'random trippy image with deer',
};
export const HIW_RAND_B_IMG = {
  light: getImagePath('b_bpa4dp.jpg'),
  dark: getImagePath('b_bpa4dp.jpg'),
  alt: 'hands holding RSD token',
};
export const HIW_RAND_C_IMG = {
  light: getImagePath('c_rqfk2q.jpg'),
  dark: getImagePath('c_rqfk2q.jpg'),
  alt: 'image of SOURCE token',
};
export const HIW_RAND_D_IMG = {
  light: getImagePath('d_vv6gzc'),
  dark: getImagePath('d_vv6gzc'),
  alt: 'random trippy image with bear and globe',
};

// OTHER COMPANY LOGOS
export const CELO_LOGO = {
  light: getImagePath('logos/celo-logo-white_qvxpw3.png'),
  dark: getImagePath('logos/celo_woavjy.png'),
  alt: 'Celo logo',
};
export const FORBES_LOGO = {
  light: getImagePath('logos/forbes-w_h8uqs2.png'),
  dark: getImagePath('logos/forbes_x5jqpy.png'),
  alt: 'Forbes logo',
};
export const HACKERNOON_LOGO = {
  light: getImagePath('logos/hackernoon-w_ntfr7o.png'),
  dark: getImagePath('logos/hackernoon_borpxf.png'),
  alt: 'Hackernoon logo',
};
export const INVESTING_LOGO = {
  light: getImagePath('logos/investing-w_sdjlh8.png'),
  dark: getImagePath('logos/investing_crgsgi.png'),
  alt: 'Investing.com logo',
};
export const TELLER_LOGO = {
  light: getImagePath('logos/teller-logo-white_jp2g3w.png'),
  dark: getImagePath('teller-logo_lscjwc.png'),
  alt: 'Teller logo',
};
export const DAO_MAKER_LOGO = {
  light: getImagePath('logos/doa-maker-logo-white_pftz3q.png'),
  dark: getImagePath('doa-maker-logo_e2itef.png'),
  alt: 'DOA Maker logo',
};
export const JUMP_CAPITAL_LOGO = {
  light: getImagePath('logos/jump-white_jqpdhu.png'),
  dark: getImagePath('logos/jump_vrww0a.png'),
  alt: 'Jump Capital logo',
};
export const DAVOA_CAPITAL_LOGO = {
  light: getImagePath('logos/davoa-logo-white_ftd432.png'),
  dark: getImagePath('stakeholders/davoa_jv2heg.png'),
  alt: 'Davoa Capital logo',
};
export const FUTURE_PERFECT_LOGO = {
  light: getImagePath('logos/fpv-logo-white_iimkof.png'),
  dark: getImagePath('stakeholders/future-perfect-ventures_ynfyvv.png'),
  alt: 'Future Perfect Ventures logo',
};
export const BLOCKCHAIN_AT_BERKELEY_LOGO = {
  light: getImagePath('logos/bab-logo-white_psk3ux.png'),
  dark: getImagePath('blockchain-at-berkeley-logo_n0s2zi.png'),
  alt: 'Blockchain at Berkeley logo',
};

export const HACKEN_LOGO = {
  light: getImagePath('hacken-white_q5nwic.png'),
  dark: getImagePath('hacken-logo_nou9j8.png'),
  alt: 'Hacken logo',
};
export const AMBISAFE_LOGO = {
  light: getImagePath('logos/ambisafe-logo-white_sww2ev.png'),
  dark: getImagePath('ambisafe_jb4vkz.png'),
  alt: 'Ambisafe logo',
};
export const FIGMENT_LOGO = {
  light: getImagePath('logos/figment-white_liuwey.svg'),
  dark: getImagePath('logos/figment-black_ybxjsc.svg'),
  alt: 'Figment logo',
};

// PRODUCTS
export const MARKETPLACE_APP_PREVIEW_IMG = {
  light: getImagePath('products/market-app_uhiwhm.png'),
  dark: getImagePath('products/market-app_uhiwhm.png'),
  alt: 'ReSource marketplace app preview',
};
export const ASHEVILLE_MARKETPLACE_PREVIEW_IMG = {
  light: getImagePath('products/marketplace-asheville_ywhidf.png'),
  dark: getImagePath('products/marketplace-asheville_ywhidf.png'),
  alt: 'ReSource marketplace Asheville, North Carolina app preview',
};
export const AUSTIN_MARKETPLACE_PREVIEW_IMG = {
  light: getImagePath('products/marketplace-austin_vo78rm.png'),
  dark: getImagePath('products/marketplace-austin_vo78rm.png'),
  alt: 'ReSource marketplace Austin, Texas app preview',
};
export const LOS_ANGELES_MARKETPLACE_PREVIEW_IMG = {
  light: getImagePath('products/marketplace-los-angeles_whuq10.png'),
  dark: getImagePath('products/marketplace-los-angeles_whuq10.png'),
  alt: 'ReSource marketplace Los Angeles, California app preview',
};
export const CHATTANOOGA_MARKETPLACE_PREVIEW_IMG = {
  light: getImagePath('products/marketplace-chattanooga_rnmdl4.png'),
  dark: getImagePath('products/marketplace-chattanooga_rnmdl4.png'),
  alt: 'ReSource marketplace Chattanooga, North Carolina app preview',
};
export const SOURCE_DAPP_PREVIEW_IMG = {
  light: getImagePath('/products/source-dapp_s7ngm2.png'),
  dark: getImagePath('/products/source-dapp_s7ngm2.png'),
  alt: 'ReSource staking and underwriting dApp preview',
};

// BLOG IMAGES
export const MUTUAL_CREDIT_BLOG_IMG = {
  light: getImagePath('blog/mutual-credit_eetko8.png'),
  dark: getImagePath('blog/mutual-credit_eetko8.png'),
  alt: 'What is mutual credit? blog banner',
};
export const WEB3_FINANCIAL_PROTOCOL_BLOG_IMG = {
  light: getImagePath('blog/web3_xlzy3o.png'),
  dark: getImagePath('blog/web3_xlzy3o.png'),
  alt: "ReSource as Web3's financial interprotocol blog banner",
};
export const WHY_WE_BUILT_BLOG_IMG = {
  light: getImagePath('blog/rs-protocol_jzohjm.png'),
  dark: getImagePath('blog/rs-protocol_jzohjm.png'),
  alt: 'Why we built the ReSource protocol blog banner',
};

// ARTICLE IMAGES
export const CELO_FOUNDATION_ARTICLE_BANNER_IMG = {
  light: getImagePath('articles/defi4peeps_uqbesg.jpg'),
  dark: getImagePath('articles/defi4peeps_uqbesg.jpg'),
  alt: 'ReSource mention in Forbes article banner',
};
export const FORBES_ARTICLE_BANNER_IMG = {
  light: getImagePath('articles/peepstable_zthtui.jpg'),
  dark: getImagePath('articles/peepstable_zthtui.jpg'),
  alt: 'ReSource mention in Celo Foundation article banner',
};
export const INVESTING_ARTICLE_BANNER_IMG = {
  light: getImagePath('articles/oldpeeps_wghk58.jpg'),
  dark: getImagePath('articles/oldpeeps_wghk58.jpg'),
  alt: 'ReSource mention in Celo Foundation article banner',
};
export const HACKERNOON_ARTICLE_BANNER_IMG = {
  light: getImagePath('articles/hackernoon-article-banner_sh35ud.jpg'),
  dark: getImagePath('articles/hackernoon-article-banner_sh35ud.jpg'),
  alt: 'ReSource mention in Hackernoon article banner',
};

export const SUSHISWAP_LOGO = {
  light: getImagePath('sushi_ztktca.png'),
  dark: getImagePath('sushi_ztktca.png'),
  alt: 'Sushiswap logo',
};
export const UNISWAP_LOGO = {
  light: getImagePath('uniswap_vhs8gv.png'),
  dark: getImagePath('uniswap_vhs8gv.png'),
  alt: 'Sushiswap logo',
};
export const MATCHA_LOGO = {
  light: getImagePath('matcha_sch4ny.png'),
  dark: getImagePath('matcha_sch4ny.png'),
  alt: 'Sushiswap logo',
};
export const UBESWAP_LOGO = {
  light: getImagePath('ubeswap_n6d4q3.png'),
  dark: getImagePath('ubeswap_n6d4q3.png'),
  alt: 'Sushiswap logo',
};
export const PANCAKESWAP_LOGO = {
  light: getImagePath('pancakeswap_nv9bzf.png'),
  dark: getImagePath('pancakeswap_nv9bzf.png'),
  alt: 'Sushiswap logo',
};
export const GATEIO_LOGO = {
  light: getImagePath('gateio_kujgzo.png'),
  dark: getImagePath('gateio_kujgzo.png'),
  alt: 'Sushiswap logo',
};
export const SHAPESHIFTING_LOGO = {
  light: getImagePath('logos/shapeshift-d_llqmov.png'),
  dark: getImagePath('logos/shapeshift-l_iipu4f.png'),
  alt: 'ShapeShift logo',
};
