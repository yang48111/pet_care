import Image from "next/image";

const services = [
  {
    icon: "浴",
    title: "基础洗护",
    text: "温和沐浴、吹干梳毛、耳道清洁、指甲修剪和脚底毛处理。",
  },
  {
    icon: "剪",
    title: "精修造型",
    text: "根据品种和日常打理习惯设计造型，兼顾好看和舒适。",
  },
  {
    icon: "护",
    title: "皮毛护理",
    text: "针对干燥、打结、换毛季等情况，提供滋养护理和开结梳理。",
  },
  {
    icon: "猫",
    title: "猫咪专护",
    text: "独立安静护理区，低噪吹风和分段操作，降低猫咪紧张感。",
  },
];

const prices = [
  {
    tag: "日常推荐",
    title: "轻松洁净",
    text: "适合短毛或定期洗护的狗狗。",
    price: "¥88",
    items: ["基础洗澡吹干", "耳道与眼周清洁", "指甲与脚底毛修剪"],
  },
  {
    tag: "人气套餐",
    title: "精致焕新",
    text: "洗护加精修，让外形和触感一起升级。",
    price: "¥168",
    featured: true,
    items: ["全套基础洗护", "脸部与身体精修", "毛发柔顺护理"],
  },
  {
    tag: "猫咪友好",
    title: "安心猫护",
    text: "独立时段预约，适合敏感或胆小猫咪。",
    price: "¥198",
    items: ["低应激洗护流程", "浮毛梳理与开结", "护理后状态反馈"],
  },
];

const features = [
  {
    icon: "视",
    title: "可视化洗护",
    text: "关键流程可向主人反馈，洗护师会记录皮肤、毛结和情绪状态。",
  },
  {
    icon: "净",
    title: "分区消毒",
    text: "洗护台、吹水区、工具和毛巾分宠使用，完成后及时清洁消毒。",
  },
  {
    icon: "柔",
    title: "低刺激用品",
    text: "根据皮肤状态选择洗护产品，避免过度香精和不必要刺激。",
  },
];

const reviews = [
  {
    text: "“我家狗狗以前很怕吹风，这次洗完精神很好，毛也顺了很多。”",
    author: "柚子妈妈",
    pet: "比熊 · 基础洗护",
  },
  {
    text: "“猫咪胆子小，店里安排了单独时段，过程很耐心，回家没有应激。”",
    author: "团团爸爸",
    pet: "英短 · 猫咪专护",
  },
  {
    text: "“修剪前会沟通想要的长度，洗后还会说哪里有皮屑和打结，很专业。”",
    author: "奶茶主人",
    pet: "泰迪 · 精修造型",
  },
  {
    text: "“第一次来就把毛结处理得很细，洗护师还教了回家怎么梳，真的很省心。”",
    author: "布丁姐姐",
    pet: "金渐层 · 皮毛护理",
  },
  {
    text: "“店里没有刺鼻香味，工具和毛巾都分开用，接毛孩子的时候状态特别放松。”",
    author: "豆包爸爸",
    pet: "柴犬 · 日常洗护",
  },
  {
    text: "“预约时间卡得很准，不用长时间等候。造型修得自然，拍照都更上镜了。”",
    author: "米粒妈妈",
    pet: "约克夏 · 精致焕新",
  },
  {
    text: "“老年犬腿脚不太好，洗护师动作很轻，还会中途休息，细节很让人安心。”",
    author: "多多主人",
    pet: "柯基 · 温和护理",
  },
  {
    text: "“洗完会把耳朵、皮肤和指甲情况讲清楚，比单纯洗干净更像一次护理记录。”",
    author: "小满妈妈",
    pet: "边牧 · 全套洗护",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="暖爪宠物洗护首页">
            <span className="brand-mark">爪</span>
            <span>暖爪宠物洗护</span>
          </a>
          <nav className="nav-links" aria-label="主导航">
            <a href="#services">服务</a>
            <a href="#prices">套餐</a>
            <a href="#why">环境</a>
            <a href="#booking">预约</a>
          </nav>
          <a className="nav-cta" href="#booking">
            立即预约
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="暖爪宠物洗护主视觉">
          <div className="hero-media">
            <Image
              src="/pet-grooming-hero.png"
              alt="明亮宠物洗护店内，一只洗护后的狗狗和猫咪在干净温馨的环境中"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-content">
            <p className="eyebrow">宠物洗护 · 精修造型 · 皮毛护理</p>
            <h1>让每一次洗护，都像回家一样安心。</h1>
            <p className="hero-copy">
              一对一护理、透明可视流程、低刺激洗护产品，为猫咪和狗狗提供温柔、干净、专业的全流程洗护体验。
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                预约到店
              </a>
              <a className="button secondary" href="#prices">
                查看套餐
              </a>
            </div>
            <div className="hero-stats" aria-label="门店数据">
              <div className="stat">
                <strong>15+</strong>
                <span>项精细护理</span>
              </div>
              <div className="stat">
                <strong>1v1</strong>
                <span>专属洗护师</span>
              </div>
              <div className="stat">
                <strong>4.9</strong>
                <span>顾客评分</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>从基础清洁到造型护理，一站式照顾毛孩子。</h2>
              <p>按宠物体型、毛量、皮肤状态和性格安排洗护节奏，减少等待和应激。</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="prices" className="band">
          <div className="wrap">
            <div className="section-head">
              <h2>清楚透明的洗护套餐。</h2>
              <p>实际价格会根据体型、毛量、打结程度微调，到店前可先线上估价。</p>
            </div>
            <div className="prices">
              {prices.map((item) => (
                <article
                  className={`price-card${item.featured ? " featured" : ""}`}
                  key={item.title}
                >
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="price">
                    {item.price}
                    <small> 起</small>
                  </div>
                  <ul>
                    {item.items.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why">
          <div className="wrap why">
            <div className="why-photo" role="img" aria-label="明亮整洁的宠物洗护空间" />
            <div>
              <p className="eyebrow">为什么选择我们</p>
              <h2>干净、透明、温柔，是门店每天坚持的标准。</h2>
              <div className="feature-list">
                {features.map((feature) => (
                  <article className="feature" key={feature.title}>
                    <div className="icon">{feature.icon}</div>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <h2>主人们的真实反馈。</h2>
              <p>每只宠物的性格都不同，稳定的照顾细节才最让人放心。</p>
            </div>
            <div className="reviews" aria-label="客户评价轮播">
              <div className="reviews-track">
                {[...reviews, ...reviews].map((review, index) => (
                  <article
                    className="review"
                    key={`${review.author}-${index}`}
                    aria-hidden={index >= reviews.length}
                  >
                    <div className="stars" aria-label="五星评价">
                      ★★★★★
                    </div>
                    <p>{review.text}</p>
                    <div className="review-footer">
                      <strong>{review.author}</strong>
                      <span>{review.pet}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="wrap booking-grid">
            <div>
              <p className="eyebrow">预约到店</p>
              <h2>提前预约，减少宠物等待时间。</h2>
              <p>
                填写宠物信息后，我们会根据体型、毛量和护理需求预留合适时段。也可以直接电话咨询当日空位。
              </p>
              <div className="contact-line">
                <span>电话：138-0000-8888</span>
                <span>地址：幸福路 88 号暖爪宠物洗护</span>
                <span>营业：周一至周日 10:00 - 20:00</span>
              </div>
            </div>
            <div className="booking-panel">
              <form>
                <label>
                  主人姓名
                  <input type="text" name="owner" placeholder="请输入姓名" />
                </label>
                <label>
                  联系电话
                  <input type="tel" name="phone" placeholder="请输入手机号" />
                </label>
                <label>
                  宠物类型
                  <select name="pet" defaultValue="狗狗">
                    <option>狗狗</option>
                    <option>猫咪</option>
                    <option>其他小宠</option>
                  </select>
                </label>
                <label>
                  预约服务
                  <select name="service" defaultValue="基础洗护">
                    <option>基础洗护</option>
                    <option>精修造型</option>
                    <option>皮毛护理</option>
                    <option>猫咪专护</option>
                  </select>
                </label>
                <label className="full">
                  期望到店时间
                  <input type="datetime-local" name="arrivalTime" />
                </label>
                <label className="full">
                  备注
                  <textarea
                    name="note"
                    placeholder="例如体重、毛量、是否怕水、有无皮肤敏感"
                  />
                </label>
                <button className="button full" type="submit">
                  提交预约
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© 2026 暖爪宠物洗护</span>
          <span>温柔洗护，认真对待每一只小朋友。</span>
        </div>
      </footer>
    </div>
  );
}
