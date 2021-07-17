package com.japp.jboard.dao.impl;

import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.japp.jboard.dao.ReplyDao;
import com.japp.jboard.vo.ReplyVO;

@Repository("ReplyDao")
public class ReplyDaoImpl implements ReplyDao {

	@Autowired
	private SqlSessionTemplate sqlSession;

	final static String NAMESPACE_REPLY = "com.japp.jboard.mapper.reply_mapper";

	@Override
	public List<ReplyVO> replyListPageCriteria(HashMap<String, Object> reply_params) throws Exception {
		return sqlSession.selectList(NAMESPACE_REPLY + ".replyListPageCriteria", reply_params);
	}

	@Override
	public Integer replyTotalCount(int b_num) throws Exception {
		return sqlSession.selectOne(NAMESPACE_REPLY + ".replyTotalCount", b_num);
	}

	@Override
	public void replyWrite(HashMap<String, Object> params) throws Exception {
		sqlSession.insert(NAMESPACE_REPLY + ".replyWrite", params);
	}

	@Override
	public void replyDelete(int reply_index) throws Exception {
		sqlSession.delete(NAMESPACE_REPLY + ".replyDelete", reply_index);
	}

	@Override
	public void replyUpdate(HashMap<String, Object> params) throws Exception {
		sqlSession.update(NAMESPACE_REPLY + ".replyUpdate", params);
	}
}
