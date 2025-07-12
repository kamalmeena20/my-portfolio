import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import radhe from '../../assets/images/profile.jpg';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ScrollArea } from '../../components/ui/Scroll-area';
import { cn } from '../../lib/utils';
import { chatbotAI } from '../../utils/chatBotAI';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: "Hi there! 👋 I'm Kamal's AI assistant. What would you like to know?",
            isBot: true,
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: Date.now().toString(),
            text: inputMessage.trim(),
            isBot: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage.trim();
        setInputMessage('');
        setIsTyping(true);

        const thinkingTime = 800 + Math.random() * 1200;

        setTimeout(() => {
            const botResponse = {
                id: (Date.now() + 1).toString(),
                text: chatbotAI.generateResponse(currentInput),
                isBot: true,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, thinkingTime);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="fixed z-50 bottom-4 right-4">
            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:scale-110",
                    "bg-[#009e66] text-white hover:bg-[#007d52]"
                )}
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-6 h-6" />}
            </Button>

            {isOpen && (
                <div
                    className="
                        absolute right-0 bottom-16
                        flex flex-col
                        w-[95vw] xxs:w-[95vw] xs:w-[90vw] xsm:w-[85vw] sm:w-[80vw]
                        md:w-[400px]
                        h-[75vh] sm:h-[80vh] md:h-[550px]
                        bg-background dark:bg-[#0e0e0e]
                        border border-border
                        rounded-lg shadow-2xl
                    "
                >
                    {/* Header */}
                    <div className="p-4 border-b border-border">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#009e66]">
                                <span className="text-sm font-semibold text-white">K</span>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-foreground">Kamal's AI Assistant</h3>
                                <p className="text-xs text-muted-foreground">Ask me anything!</p>
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 px-3 py-2 sm:p-4">
                        <div className="space-y-4" style={{ scrollbarWidth: "none" }}>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex gap-3",
                                        message.isBot ? "justify-start" : "justify-end"
                                    )}
                                >
                                    {message.isBot && (
                                        <div className="flex-shrink-0 w-6 h-6 mt-1 overflow-hidden rounded-full">
                                            <img src={radhe} alt="Bot Avatar" className="object-cover w-full h-full" />
                                        </div>
                                    )}
                                    <div
                                        className={cn(
                                            "max-w-[80%] rounded-lg px-3 py-2 text-xs sm:text-sm",
                                            message.isBot
                                                ? "bg-muted text-foreground dark:bg-white dark:text-black"
                                                : "bg-[#009e66] text-white"
                                        )}
                                    >
                                        {message.text}
                                    </div>
                                    {!message.isBot && (
                                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-secondary">
                                            <User className="w-5 h-5 text-secondary-foreground" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Typing animation */}
                            {isTyping && (
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 mt-1 overflow-hidden rounded-full">
                                        <img src={radhe} alt="Bot Avatar" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="px-3 py-2 rounded-lg bg-muted">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                            <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div ref={messagesEndRef} />
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 border-t border-border">
                        <div className="flex gap-2">
                            <Input
                                ref={inputRef}
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me anything..."
                                className="flex-1 text-xs sm:text-sm bg-background text-foreground"
                                disabled={isTyping}
                            />
                            <Button
                                onClick={handleSendMessage}
                                disabled={!inputMessage.trim() || isTyping}
                                size="sm"
                                className="px-3 bg-[#009e66] text-white hover:bg-[#007d52]"
                            >
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
