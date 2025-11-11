(function (React$1) {
  'use strict';

  function ProfileCardStats(_ref) {
    let {
      value,
      label
    } = _ref;
    return /*#__PURE__*/React$1.createElement("div", {
      className: "profile-card__stat"
    }, /*#__PURE__*/React$1.createElement("p", {
      className: "profile-card__stat-value"
    }, value), /*#__PURE__*/React$1.createElement("p", {
      className: "profile-card__stat-label"
    }, label));
  }
  function ProfileCard() {
    return /*#__PURE__*/React$1.createElement("article", {
      className: "profile-card"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "profile-card__header"
    }), /*#__PURE__*/React$1.createElement("div", {
      className: "profile-card__body"
    }, /*#__PURE__*/React$1.createElement("img", {
      src: "./images/image-victor.jpg",
      alt: "Victor Crest",
      width: "96px",
      height: "96px",
      className: "profile-card__avatar"
    }), /*#__PURE__*/React$1.createElement("h2", {
      className: "profile-card__name"
    }, "Victor Crest ", /*#__PURE__*/React$1.createElement("span", {
      className: "profile-card__age"
    }, "26")), /*#__PURE__*/React$1.createElement("p", {
      className: "profile-card__location"
    }, "London")), /*#__PURE__*/React$1.createElement("div", {
      className: "profile-card__footer"
    }, /*#__PURE__*/React$1.createElement("div", {
      className: "profile-card__stats"
    }, /*#__PURE__*/React$1.createElement(ProfileCardStats, {
      value: "80K",
      label: "Followers"
    }), /*#__PURE__*/React$1.createElement(ProfileCardStats, {
      value: "803K",
      label: "Likes"
    }), /*#__PURE__*/React$1.createElement(ProfileCardStats, {
      value: "1.4K",
      label: "Photos"
    }))));
  }

  const {
    createRoot
  } = ReactDOM;
  const root = createRoot(document.querySelector("#root"));
  root.render(/*#__PURE__*/React.createElement(ProfileCard, null));

})(React);
