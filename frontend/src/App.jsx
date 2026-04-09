import React, { useState, useEffect } from 'react';
import { Lock, User, Sparkles, MessageCircle, X, Send, ShoppingCart, PhoneCall, MapPin, Mail, CreditCard, Banknote, Wallet, Trash2 } from 'lucide-react';
import axios from 'axios';
import './index.css';

const API_BASE_URL = import.meta.env.VITE_BACKEND_HOST 
  ? `https://${import.meta.env.VITE_BACKEND_HOST}/api` 
  : (window.location.hostname === 'localhost' ? 'http://localhost:8000/api' : '/api');

const CuriousSpider = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [target, setTarget] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Keep a curious distance - not right exactly on cursor
      setTarget({ x: e.clientX + 40, y: e.clientY - 40 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;
    const updatePosition = () => {
      setPos((prevPos) => {
        const dx = target.x - prevPos.x;
        const dy = target.y - prevPos.y;
        
        // Stop moving if close enough to avoid trembling
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
            return prevPos;
        }

        return {
          x: prevPos.x + dx * 0.05,
          y: prevPos.y + dy * 0.05
        };
      });
      animationFrame = requestAnimationFrame(updatePosition);
    };
    animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return (
    <svg 
      className="curious-spider" 
      viewBox="0 0 100 100"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="spider-glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#spider-glow)">
        {/* Legs */}
        <path d="M 48 45 Q 30 20, 20 35" fill="none" stroke="var(--accent-glow-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 52 45 Q 70 20, 80 35" fill="none" stroke="var(--accent-glow-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 47 50 Q 20 50, 15 65" fill="none" stroke="var(--accent-glow-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 53 50 Q 80 50, 85 65" fill="none" stroke="var(--accent-glow-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 48 55 Q 35 80, 25 85" fill="none" stroke="var(--accent-glow-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 52 55 Q 65 80, 75 85" fill="none" stroke="var(--accent-glow-secondary)" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Body */}
        <ellipse cx="50" cy="55" rx="5" ry="7" fill="var(--bg-primary)" stroke="var(--accent-glow)" strokeWidth="1.5"/>
        <circle cx="50" cy="45" r="3.5" fill="var(--bg-primary)" stroke="var(--accent-glow)" strokeWidth="1.5"/>
        {/* Eyes */}
        <circle cx="48.5" cy="44" r="0.8" fill="#fff" />
        <circle cx="51.5" cy="44" r="0.8" fill="#fff" />
      </g>
    </svg>
  );
};

const CosmicOcean = () => (
  <div className="cosmic-ocean">
    <CuriousSpider />
    {/* Majestic Constellation Space Whale */}
    <svg className="space-whale" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Whale Body Outline */}
      <path d="M 900 130 
               C 700 50, 400 60, 200 130 
               C 160 140, 120 150, 100 155
               L 10 70 
               C 40 120, 80 155, 95 165
               C 80 175, 40 210, 10 260 
               L 100 175
               C 120 180, 160 190, 200 200 
               C 400 270, 700 250, 850 170 
               C 880 160, 920 140, 900 130 Z" 
            fill="rgba(0,0,0,0.3)" stroke="#e0f7fa" strokeWidth="3" filter="url(#glow)" />
      
      <path d="M 600 230 C 550 350, 450 400, 400 420 C 420 380, 460 300, 520 220 Z" 
            fill="rgba(0,0,0,0.3)" stroke="#e0f7fa" strokeWidth="2" filter="url(#glow)" />
      
      {/* Constellation connecting lines */}
      <g stroke="rgba(224, 247, 250, 0.6)" strokeWidth="1.5">
        <line x1="850" y1="145" x2="800" y2="120" />
        <line x1="800" y1="120" x2="700" y2="90" />
        <line x1="700" y1="90" x2="550" y2="95" />
        <line x1="550" y1="95" x2="400" y2="115" />
        <line x1="400" y1="115" x2="280" y2="140" />
        <line x1="280" y1="140" x2="180" y2="160" />
        
        <line x1="850" y1="145" x2="780" y2="170" />
        <line x1="780" y1="170" x2="680" y2="180" />
        <line x1="680" y1="180" x2="580" y2="190" />
        <line x1="580" y1="190" x2="480" y2="185" />
        <line x1="480" y1="185" x2="400" y2="115" />
        
        <line x1="580" y1="190" x2="510" y2="245" />
        <line x1="510" y1="245" x2="450" y2="300" />
        <line x1="450" y1="300" x2="430" y2="360" />
        
        <line x1="180" y1="160" x2="120" y2="175" />
        <line x1="120" y1="175" x2="75" y2="125" />
        <line x1="120" y1="175" x2="80" y2="225" />
      </g>

      {/* Constellations points (Stars) */}
      <g fill="#ffffff" filter="url(#glow)">
        <circle cx="850" cy="145" r="4" />
        <circle cx="800" cy="120" r="3" />
        <circle cx="700" cy="90" r="4.5" />
        <circle cx="550" cy="95" r="3.5" />
        <circle cx="400" cy="115" r="5" />
        <circle cx="280" cy="140" r="3" />
        <circle cx="180" cy="160" r="4" />
        
        <circle cx="780" cy="170" r="2.5" />
        <circle cx="680" cy="180" r="3.5" />
        <circle cx="580" cy="190" r="4" />
        <circle cx="480" cy="185" r="3" />
        
        <circle cx="510" cy="245" r="3" />
        <circle cx="450" cy="300" r="4" />
        <circle cx="430" cy="360" r="3.5" />
        
        <circle cx="80" cy="225" r="3" />
        <circle cx="75" cy="125" r="3" />
        <circle cx="120" cy="175" r="4" />
      </g>
    </svg>

    {/* Small Fishes */}
    <svg className="space-fish fish-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M 90 50 C 70 10, 30 20, 20 40 L 5 15 C 10 30, 10 45, 15 50 C 10 55, 10 70, 5 85 L 20 60 C 30 80, 70 90, 90 50 Z" 
            fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
      <circle cx="75" cy="45" r="2" fill="#fff" />
      <path d="M 50 50 C 45 60, 35 65, 40 50 Z" fill="rgba(255, 255, 255, 0.25)" />
    </svg>
    
    <svg className="space-fish fish-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M 90 50 C 70 10, 30 20, 20 40 L 5 15 C 10 30, 10 45, 15 50 C 10 55, 10 70, 5 85 L 20 60 C 30 80, 70 90, 90 50 Z" 
            fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
      <circle cx="75" cy="45" r="2" fill="#fff" />
      <path d="M 50 50 C 45 60, 35 65, 40 50 Z" fill="rgba(255, 255, 255, 0.25)" />
    </svg>
    
    <svg className="space-fish fish-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M 90 50 C 70 10, 30 20, 20 40 L 5 15 C 10 30, 10 45, 15 50 C 10 55, 10 70, 5 85 L 20 60 C 30 80, 70 90, 90 50 Z" 
            fill="rgba(255, 255, 255, 0.15)" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
      <circle cx="75" cy="45" r="2" fill="#fff" />
      <path d="M 50 50 C 45 60, 35 65, 40 50 Z" fill="rgba(255, 255, 255, 0.25)" />
    </svg>
  </div>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hãy cho tôi biết yêu cầu của bạn là gì tôi sẽ giúp", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    
    try {
      const res = await axios.post(`${API_BASE_URL}/chat`, { message: input });
      setMessages(prev => [...prev, { text: res.data.reply, sender: "bot" }]);
    } catch (err) {
      const serverErr = err.response?.data?.detail || "Kết nối tâm linh đã bị gián đoạn... vui lòng thử lại sau.";
      setMessages(prev => [...prev, { text: serverErr, sender: "bot" }]);
    }
  };

  return (
    <>
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', margin: 0 }}>
              <Sparkles size={20} /> Dark AI Oracle
            </h3>
          </div>
          
          <div className="chat-body" id="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="chat-footer">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Hãy cho tôi biết yêu cầu của bạn là gì..." 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button className="chat-send-btn" onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Products = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Could not fetch products", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Khám phá các bảo vật</h2>
      <div className="products-grid">
        {loading ? (
          <p>Đang tải dữ liệu từ thế giới hắc ám...</p>
        ) : products.length === 0 ? (
          <p>Kho tàng hiện đang trống rỗng (Chưa kết nối DB).</p>
        ) : (
          products.map(p => (
            <div key={p._id} className="glass-panel product-card" onClick={() => onSelectProduct(p)}>
              {p.image && <img src={p.image} alt={p.name} className="product-image-thumbnail" />}
              <h3 style={{ color: '#fff', margin: '0 0 10px 0' }}>{p.name}</h3>
              <p className="product-price">{p.price.toLocaleString()} VNĐ</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '10px' }}>{p.description}</p>
              <span style={{ display: 'inline-block', fontSize: '0.8rem', padding: '4px 10px', background: 'rgba(138,43,226,0.3)', borderRadius: '12px', border: '1px solid rgba(138,43,226,0.5)' }}>{p.category}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    if (!username || !password) return;
    
    try {
      if (isForgot) {
        if (!newPassword) return;
        const res = await axios.post(`${API_BASE_URL}/forgot-password`, { 
          username, 
          old_password: password, 
          new_password: newPassword 
        });
        setSuccessMsg(res.data.message);
        setIsForgot(false);
        setPassword("");
        setNewPassword("");
      } else {
        const endpoint = isRegister ? 'register' : 'login';
        const res = await axios.post(`${API_BASE_URL}/${endpoint}`, { username, password });
        
        if (isRegister) {
          setSuccessMsg(res.data.message);
          setIsRegister(false); // Switch to login window
        } else {
          onLogin(res.data.username);
        }
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.detail || "Đã xảy ra lỗi không xác định.");
    }
  };

  return (
    <div className="login-container">
      <div className="glass-panel login-box">
        <Sparkles size={48} color="var(--accent-glow)" style={{ marginBottom: '1rem' }} />
        <h2 className="login-title">
          {isForgot ? "Reset Spell" : isRegister ? "Join the Realm" : "Enter the Realm"}
        </h2>
        
        {errorMsg && <div style={{ color: '#ff4444', marginBottom: '1rem', background: 'rgba(255,0,0,0.1)', padding: '10px', borderRadius: '5px' }}>{errorMsg}</div>}
        {successMsg && <div style={{ color: '#00e676', marginBottom: '1rem', background: 'rgba(0,230,118,0.1)', padding: '10px', borderRadius: '5px' }}>{successMsg}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Master's Identity</label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="var(--text-secondary)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="text" className="input-field" style={{ paddingLeft: '40px' }} placeholder="Your username" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>
          </div>
          
          <div className="input-group">
            <label>{isForgot ? "Old Secret Spell" : "Secret Spell"}</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="var(--text-secondary)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input type="password" className="input-field" style={{ paddingLeft: '40px' }} placeholder={isForgot ? "Old password" : "Your password"} value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
          </div>

          {isForgot && (
            <div className="input-group">
              <label>New Secret Spell</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="var(--text-secondary)" style={{ position: 'absolute', top: '12px', left: '12px' }} />
                <input type="password" className="input-field" style={{ paddingLeft: '40px' }} placeholder="New password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
              </div>
            </div>
          )}
          
          <button type="submit" className="btn-login">
            {isForgot ? "Renew Spell" : isRegister ? "Forge Identity" : "Open Gateway"}
          </button>
          
          <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {!isForgot && (
              <div>
                {isRegister ? "Already have an identity? " : "A wandering soul? "}
                <span style={{ color: 'var(--accent-glow-secondary)', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setIsRegister(!isRegister)}>
                  {isRegister ? "Return to Gate" : "Create one"}
                </span>
              </div>
            )}
            <div>
              <span style={{ color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => { setIsForgot(!isForgot); setIsRegister(false); }}>
                {isForgot ? "Back to Gateway" : "Forgot your Secret Spell?"}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert("Đã thêm vào giỏ hàng");
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = (method) => {
    alert(`Đã đặt hàng thành công qua ${method}!\nCảm ơn ${currentUser} đã mua sắm.`);
    setCart([]);
    setIsCartOpen(false);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn ngài đã gửi phương thư! Mật sứ sẽ sớm liên lạc.");
    setIsContactOpen(false);
  };

  return (
    <div className="App">
      <CosmicOcean />
      {!currentUser ? (
        <Login onLogin={setCurrentUser} />
      ) : (
        <div className="home-container">
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
            <h1 className="login-title" style={{ margin: 0, fontSize: '2rem' }}>hihi store</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Welcome, {currentUser}</span>
              
              <button className="icon-btn" onClick={() => setIsContactOpen(true)} title="Liên hệ">
                <PhoneCall size={20} />
              </button>
              
              <button className="icon-btn" onClick={() => setIsCartOpen(true)} style={{ position: 'relative' }} title="Giỏ hàng">
                <ShoppingCart size={20} />
                {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
              </button>

              <button className="btn-login" style={{ width: 'auto', margin: 0, padding: '8px 20px' }} onClick={() => setCurrentUser(null)}>
                Rút lui (Logout)
              </button>
            </div>
          </header>
          <Products onSelectProduct={setSelectedProduct} />
          <ChatWidget />
          
          {selectedProduct && (
            <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
              <div className="glass-panel modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>
                  <X size={24} />
                </button>
                <div className="modal-body">
                  {selectedProduct.image ? (
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
                  ) : (
                    <div className="modal-image-placeholder">No Image Available</div>
                  )}
                  <div className="modal-info">
                    <h2 className="login-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{selectedProduct.name}</h2>
                    <p className="product-price" style={{ fontSize: '1.8rem', color: 'var(--accent-glow-secondary)', margin: '15px 0' }}>{selectedProduct.price.toLocaleString()} VNĐ</p>
                    <span style={{ display: 'inline-block', fontSize: '1rem', padding: '6px 15px', background: 'rgba(138,43,226,0.3)', borderRadius: '15px', border: '1px solid rgba(138,43,226,0.5)', marginBottom: '25px', color: '#fff' }}>
                      {selectedProduct.category}
                    </span>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '40px' }}>
                      {selectedProduct.description}
                    </p>
                    <button className="btn-login" style={{ width: '100%', fontSize: '1.2rem', padding: '16px' }} onClick={() => addToCart(selectedProduct)}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isCartOpen && (
            <div className="modal-overlay" onClick={() => setIsCartOpen(false)}>
              <div className="glass-panel modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '90%' }}>
                <button className="modal-close-btn" onClick={() => setIsCartOpen(false)}>
                  <X size={24} />
                </button>
                <div className="modal-body" style={{ flexDirection: 'column', width: '100%', padding: '20px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className="login-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Giỏ Hàng Hiện Tại</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Kiểm tra bảo vật và tiến hành nghi thức thanh toán</p>
                  </div>
                  
                  <div className="contact-grid">
                    {/* Left: Cart Items */}
                    <div className="contact-info-panel" style={{ display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ShoppingCart color="var(--accent-glow-secondary)" /> Bảo Vật Đã Chọn
                      </h3>
                      <div className="cart-list" style={{ marginTop: 0, paddingRight: '10px', flex: 1, maxHeight: '350px' }}>
                        {cart.length === 0 ? (
                          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', margin: '2rem 0' }}>Giỏ hàng trống rỗng.</p>
                        ) : (
                          cart.map((item, idx) => (
                            <div key={idx} className="cart-item">
                              <img src={item.image || "https://dummyimage.com/50x50/333/fff?text=?"} alt={item.name} className="cart-item-img" />
                              <div className="cart-item-info">
                                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                                <p className="product-price" style={{ fontSize: '1rem', margin: 0 }}>{item.price.toLocaleString()} VNĐ</p>
                              </div>
                              <button className="cart-remove-btn" onClick={() => removeFromCart(idx)}>
                                <Trash2 size={18} />
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                      
                      {cart.length > 0 && (
                        <div className="cart-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '20px', marginTop: '20px' }}>
                          <span style={{ fontSize: '1.2rem', color: '#fff' }}>Tổng cộng:</span>
                          <span className="product-price" style={{ fontSize: '1.5rem' }}>{cartTotal.toLocaleString()} VNĐ</span>
                        </div>
                      )}
                    </div>

                    {/* Right: Checkout Flow */}
                    <div className="contact-form-panel">
                      <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Banknote color="var(--accent-glow)" /> Hình Thức Thanh Toán
                      </h3>
                      
                      {cart.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px 20px', background: 'rgba(0,0,0,0.3)', borderRadius: '15px' }}>
                          <p style={{ color: 'var(--text-secondary)' }}>Hãy thêm bảo vật vào giỏ trước khi thanh toán.</p>
                        </div>
                      ) : (
                        <div className="payment-options">
                          <button className="payment-btn" onClick={() => handleCheckout("Thanh toán khi nhận hàng (COD)")} style={{ padding: '15px', textAlign: 'left' }}>
                            <Banknote size={24} color="var(--accent-glow-secondary)" />
                            <div>
                              <strong style={{ display: 'block' }}>Tiền mặt (COD)</strong>
                              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Thanh toán khi nhận hàng</span>
                            </div>
                          </button>
                          <button className="payment-btn" onClick={() => handleCheckout("Thẻ Tín dụng / Ghi nợ")} style={{ padding: '15px', textAlign: 'left' }}>
                            <CreditCard size={24} color="var(--accent-glow-secondary)" />
                            <div>
                              <strong style={{ display: 'block' }}>Thẻ Tín dụng / Ghi nợ</strong>
                              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Visa, Mastercard, JCB</span>
                            </div>
                          </button>
                          <button className="payment-btn" onClick={() => handleCheckout("Ví Điện Tử (Momo / ZaloPay)")} style={{ padding: '15px', textAlign: 'left' }}>
                            <Wallet size={24} color="var(--accent-glow-secondary)" />
                            <div>
                              <strong style={{ display: 'block' }}>Ví Điện Tử</strong>
                              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Momo, ZaloPay, VNPay</span>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isContactOpen && (
            <div className="modal-overlay" onClick={() => setIsContactOpen(false)}>
              <div className="glass-panel modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '90%' }}>
                <button className="modal-close-btn" onClick={() => setIsContactOpen(false)}>
                  <X size={24} />
                </button>
                <div className="modal-body" style={{ flexDirection: 'column', width: '100%', padding: '20px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 className="login-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Kết Nối Tâm Linh</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Gửi mật thư hoặc liên hệ trực tiếp với chúng tôi tại điện thờ</p>
                  </div>
                  
                  <div className="contact-grid">
                    {/* Left: Contact Info */}
                    <div className="contact-info-panel">
                      <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <MapPin color="var(--accent-glow-secondary)" /> Điện Thờ Chính
                      </h3>
                      <div className="contact-info" style={{ marginTop: 0 }}>
                        <div className="contact-item">
                          <PhoneCall className="contact-icon" />
                          <div>
                            <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>Đường Dây Nóng</strong>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>0919967616</p>
                          </div>
                        </div>
                        <div className="contact-item">
                          <Mail className="contact-icon" />
                          <div>
                            <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>Hòm Thư Mật</strong>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>thong.2474802010375@vanlanguni.vn</p>
                          </div>
                        </div>
                        <div className="contact-item" style={{ alignItems: 'flex-start' }}>
                          <MapPin className="contact-icon" style={{ marginTop: '5px' }} />
                          <div>
                            <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>Tọa Độ Địa Lý</strong>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.4', color: 'var(--text-secondary)' }}>69/68 Đặng Thùy Trâm, P. 13, Q. Bình Thạnh, Tp. HCM</p>
                          </div>
                        </div>
                      </div>
                      
                      <iframe 
                        src="https://maps.google.com/maps?q=69/68%20%C4%90%E1%BA%B7ng%20Th%C3%B9y%20Tr%C3%A2m,%20P.%2013,%20Q.%20B%C3%ACnh%20Th%E1%BA%A1nh,%20Tp.%20HCM&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="200" 
                        style={{ border: '1px solid var(--glass-border)', borderRadius: '10px', marginTop: '20px', background: 'rgba(0,0,0,0.5)' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="contact-form-panel">
                      <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <MessageCircle color="var(--accent-glow)" /> Gửi Mật Thư
                      </h3>
                      <form className="contact-form" onSubmit={handleContactSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                          <input type="text" className="input-field" placeholder="Danh xưng của ngài..." required style={{ padding: '15px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                          <input type="email" className="input-field" placeholder="Email liên lạc..." required style={{ padding: '15px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                          <textarea className="input-field" placeholder="Nội dung truyền đạt..." rows="4" style={{ resize: 'none', padding: '15px', fontFamily: 'inherit' }} required></textarea>
                        </div>
                        <button type="submit" className="btn-login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                          <Send size={18} /> Khai Mở Tâm Linh
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
