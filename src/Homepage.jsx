import React from 'react';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="content-container">
                {/* Left Sidebar */}
                <div className="sidebar">
                    <div className="nav-item">
                        <span className="nav-icon space-icon">S</span>
                        <span className="nav-text">Learning Path</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon quest-icon">📦</span>
                        <span className="nav-text">Quests</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon games-icon">🎮</span>
                        <span className="nav-text">Games</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon mission-icon">➕</span>
                        <span className="nav-text">Create Mission</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon buddy-icon">👥</span>
                        <span className="nav-text">Study Buddy</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon settings-icon">⚙️</span>
                        <span className="nav-text">Settings</span>
                    </div>
                    <div className="nav-item">
                        <span className="nav-icon more-icon">•••</span>
                        <span className="nav-text">More</span>
                    </div>
                </div>

                {/* Center Panel */}
                <div className="center-panel">
                    <div className="header-section">
                        <div className="back-button">← SECTION 1, UNIT 1</div>
                        <h1 className="title">Satellite Systems</h1>
                        <div className="guidebook"><span className="book-icon">📖</span> Guidebook</div>
                    </div>

                    <div className="progress-path">
                        <div className="progress-node">
                            <div className="star-icon">★</div>
                        </div>
                        <div className="path-line"></div>
                        <div className="progress-node">
                            <div className="star-icon">★</div>
                        </div>
                        <div className="path-line"></div>
                        <div className="progress-node">
                            <div className="star-icon">★</div>
                        </div>
                        <div className="path-line"></div>
                        <div className="progress-node">
                            <div className="star-icon">★</div>
                        </div>
                        <div className="path-line"></div>
                        <div className="progress-node locked">
                            <div className="lock-icon">🔒</div>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="right-panel">
                    <div className="neptune-section">
                        <div className="section-header">
                            <h2>Neptune League</h2>
                            <span className="view-all">VIEW ALL</span>
                        </div>
                        <div className="neptune-content">
                            <div className="neptune-icon">🌍</div>
                            <div className="league-info">
                                <p className="rank">You're ranked #11</p>
                                <p className="xp">You've earned 205 XP this week so far</p>
                            </div>
                        </div>
                    </div>

                    <div className="quests-section">
                        <div className="section-header">
                            <h2>Quests</h2>
                            <span className="view-all">VIEW ALL</span>
                        </div>
                        <div className="quest-items">
                            <div className="quest-item">
                                <div className="checkbox">
                                    <span className="check-icon">✓</span>
                                </div>
                                <div className="quest-text">
                                    <p>Review material for <span className="highlight">Space Stations Test</span></p>
                                    <div className="progress-bar"><div className="progress progress-black"></div></div>
                                </div>
                            </div>
                            <div className="quest-item">
                                <div className="checkbox">
                                    <span className="check-icon">✓</span>
                                </div>
                                <div className="quest-text">
                                    <p>Complete assignment on <span className="highlight">Orbit Basics</span></p>
                                    <div className="progress-bar"><div className="progress progress-black"></div></div>
                                </div>
                            </div>
                            <div className="quest-item">
                                <div className="checkbox">
                                    <span className="check-icon">✓</span>
                                </div>
                                <div className="quest-text">
                                    <p>Refresh your memory on <span className="highlight">Deep Space Travel</span></p>
                                    <div className="progress-bar"><div className="progress progress-black"></div></div>
                                </div>
                            </div>
                            <div className="quest-item">
                                <div className="checkbox">
                                    <span className="check-icon">✓</span>
                                </div>
                                <div className="quest-text">
                                    <p>Score 90% or higher on <span className="highlight">Milky Way</span> "fill in the blank"</p>
                                    <div className="progress-bar"><div className="progress progress-black"></div></div>
                                </div>
                            </div>
                            <div className="learning-time">
                                <p>Learning Time</p>
                                <div className="time-progress-bar"><div className="time-progress"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Add top right icons from reference image */}
            <div className="top-right-icons">
                <div className="icon-item">📚</div>
                <div className="icon-item">🔔</div>
                <div className="icon-item">🔥</div>
                <div className="icon-item">👧</div>
            </div>
        </div>
    );
};

export default Homepage;